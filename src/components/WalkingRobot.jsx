import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// --- MiniGame Component ---
const MiniGame = ({ onExit }) => {
  const PLAYER_WIDTH = 100;
  const PLAYER_HEIGHT = 100;
  const PLAYER_BOTTOM = 80;

  // Center the player initially
  const [playerX, setPlayerX] = useState((window.innerWidth - PLAYER_WIDTH) / 2);
  const [bullets, setBullets] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const gameAreaRef = useRef(null);
  const animationRef = useRef();
  const lastTimeRef = useRef(Date.now());

  // Mouse/touch drag handlers
  const handlePointerDown = (e) => {
    if (gameOver) return;
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e) => {
    if (gameOver || !isDragging) return;
    let clientX;
    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    setPlayerX(Math.max(0, Math.min(window.innerWidth - PLAYER_WIDTH, clientX - PLAYER_WIDTH / 2)));
  };

  // Keyboard move
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft") setPlayerX((x) => Math.max(0, x - 30));
      if (e.key === "ArrowRight") setPlayerX((x) => Math.min(window.innerWidth - PLAYER_WIDTH, x + 30));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gameOver]);

  // Spawn bullets
  useEffect(() => {
    if (gameOver) return;
    const spawn = setInterval(() => {
      setBullets((prev) => [
        ...prev,
        {
          id: Math.random(),
          x: Math.random() * (window.innerWidth - 40),
          y: -40,
          value: Math.random() > 0.5 ? "0" : "1",
        },
      ]);
    }, 600);
    return () => clearInterval(spawn);
  }, [gameOver]);

  // Animate bullets with requestAnimationFrame
  useEffect(() => {
    if (gameOver) return;
    let running = true;
    function animate() {
      setBullets((prev) =>
        prev
          .map((b) => ({ ...b, y: b.y + 8 }))
          .filter((b) => b.y < window.innerHeight + 40)
      );
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, [gameOver]);

  // Collision detection (match player position)
  useEffect(() => {
    if (gameOver) return;
    const playerY = window.innerHeight - PLAYER_BOTTOM - PLAYER_HEIGHT;
    for (let b of bullets) {
      // Bullet size: 40x40
      if (
        b.y + 40 > playerY &&
        b.y < playerY + PLAYER_HEIGHT &&
        b.x + 40 > playerX &&
        b.x < playerX + PLAYER_WIDTH
      ) {
        setGameOver(true);
        return; // <--- Immediately stop after collision
      }
    }
  }, [bullets, playerX, gameOver]);

  // Exit on ESC
  useEffect(() => {
    const esc = (e) => {
      if (e.key === "Escape") onExit();
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [onExit]);

  // Responsive player position
  useEffect(() => {
    const handleResize = () => {
      setPlayerX((x) => Math.min(window.innerWidth - PLAYER_WIDTH, x));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Retry handler
  const handleRetry = () => {
    setGameOver(false);
    setBullets([]);
    setPlayerX((window.innerWidth - PLAYER_WIDTH) / 2); // Center on retry
  };

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #312e81 0%, #a21caf 100%)",
        overflow: "hidden",
      }}
      onMouseDown={handlePointerDown}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchEnd={handlePointerUp}
      onMouseMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      ref={gameAreaRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/60 to-black/90 pointer-events-none" />
      {/* Bullets */}
      {bullets.map((b) => (
        <motion.div
          key={b.id}
          className="absolute text-3xl font-bold select-none"
          style={{
            left: b.x,
            top: b.y,
            color: b.value === "0" ? "#60a5fa" : "#f472b6",
            textShadow: "0 0 8px #fff8",
            pointerEvents: "none",
            userSelect: "none",
            width: 40,
            height: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {b.value}
        </motion.div>
      ))}
      {/* Player */}
      <motion.div
        className="absolute bottom-20"
        animate={{ x: playerX }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          width: PLAYER_WIDTH,
          height: PLAYER_HEIGHT,
          pointerEvents: "none",
        }}
      >
        <DotLottieReact
          src="https://lottie.host/cc8be663-1fdd-467f-a593-516b248b01c4/ZG1C9UydSD.lottie"
          autoplay
          loop
          style={{ width: PLAYER_WIDTH, height: PLAYER_HEIGHT, filter: "drop-shadow(0 0 12px #fff8)" }}
        />
      </motion.div>
      {/* Game Over */}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <div className="text-4xl font-bold text-white mb-4">Game Over</div>
          <div className="flex gap-4">
            <button
              className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition"
              onClick={handleRetry}
            >
              Retry
            </button>
            <button
              className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition"
              onClick={onExit}
            >
              Exit
            </button>
          </div>
        </div>
      )}
      {/* Exit button */}
      {!gameOver && (
        <button
          className="absolute top-6 right-8 px-4 py-2 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition z-10"
          onClick={onExit}
        >
          Exit
        </button>
      )}
    </motion.div>
  );
};
// --- End MiniGame ---

const WalkingRobot = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showRobot, setShowRobot] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [tapCount, setTapCount] = useState(0);
  const [showGame, setShowGame] = useState(false);
  const [showGameSelect, setShowGameSelect] = useState(false);
  const [crashed, setCrashed] = useState(false);
  const intervalRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const tapTimeoutRef = useRef(null);
  const isScrolling = useRef(false);
  const longPressTimer = useRef(null);

  useEffect(() => {
    if (isDead) return;

    const moveRobotRandomly = () => {
      const maxX = window.innerWidth - 150;
      const maxY = window.innerHeight - 150;
      const newX = Math.random() * maxX;
      const newY = Math.random() * maxY;
      setPosition({ x: newX, y: newY });
    };

    const showTimeout = setTimeout(() => {
      setShowRobot(true);
      moveRobotRandomly();
      intervalRef.current = setInterval(moveRobotRandomly, 4000);
    }, 2000);

    const handleScroll = () => {
      setShowRobot(false);
      if (!isScrolling.current) {
        clearInterval(intervalRef.current);
        isScrolling.current = true;
      }
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrolling.current = false;
        setShowRobot(true);
        moveRobotRandomly();
        intervalRef.current = setInterval(moveRobotRandomly, 4000);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(showTimeout);
      clearInterval(intervalRef.current);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isDead]);

  // Handle double tap to wake up
  useEffect(() => {
    if (!isDead) {
      setTapCount(0);
      if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
    }
  }, [isDead]);

  // --- Long Press Handler ---
  const handlePointerDown = () => {
    if (isDead || showGame || crashed || showGameSelect) return;
    longPressTimer.current = setTimeout(() => {
      setCrashed(true);
      setShowRobot(false);
      setTimeout(() => {
        setCrashed(false);
        setShowGameSelect(true); // Show game selection after crash
      }, 1500);
    }, 700); // 700ms for long press
  };

  const handlePointerUp = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  // --- Main Render ---
  return (
    <>
      {/* Crash Overlay */}
      <AnimatePresence>
        {crashed && (
          <motion.div
            key="crash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{
              background: "repeating-linear-gradient(135deg, #111 0 10px, #fff 10px 20px)",
              mixBlendMode: "difference",
              animation: "glitch 0.3s infinite alternate",
            }}
          >
            <div className="text-6xl font-extrabold text-white drop-shadow-lg select-none" style={{ textShadow: "0 0 20px #fff, 2px 2px 0 #f00, -2px -2px 0 #0ff" }}>
              <span style={{ color: "#f00" }}>CRASHED</span>
              <div className="text-xl mt-4 text-white/80">Resolving...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showRobot && !isDead && (
          <motion.div
            className="fixed z-50 pointer-events-auto"
            key="robot"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: [1, 1.05, 1],
              x: position.x,
              y: position.y,
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: {
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              },
              x: { type: "tween", ease: "easeInOut", duration: 3.5 },
              y: { type: "tween", ease: "easeInOut", duration: 3.5 }
            }}
            onTap={() => {
              if (!isDead) setIsDead(true);
            }}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{ cursor: "pointer" }}
          >
            <div className="w-[150px] h-[150px] relative">
              <DotLottieReact
                src="https://lottie.host/cc8be663-1fdd-467f-a593-516b248b01c4/ZG1C9UydSD.lottie"
                autoplay={true}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 rounded-full blur-md"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        )}
        {/* Dead robot animation */}
        {isDead && (
          <motion.div
            className="fixed z-50 pointer-events-auto"
            key="robot-dead"
            initial={{ opacity: 1, rotate: 0, y: position.y, x: position.x }}
            animate={{ opacity: 1, rotate: 90, y: position.y + 60 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
            style={{ cursor: "pointer", width: 150, height: 150 }}
            onTap={() => {
              setTapCount((prev) => {
                const next = prev + 1;
                if (next === 1) {
                  if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
                  tapTimeoutRef.current = setTimeout(() => setTapCount(0), 400);
                }
                if (next === 2) {
                  setIsDead(false);
                  setTapCount(0);
                  if (tapTimeoutRef.current) clearTimeout(tapTimeoutRef.current);
                }
                return next;
              });
            }}
          >
            <div className="w-[150px] h-[150px] relative grayscale">
              <DotLottieReact
                src="https://lottie.host/cc8be663-1fdd-467f-a593-516b248b01c4/ZG1C9UydSD.lottie"
                autoplay={false}
                loop={false}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Game Select Overlay */}
      <AnimatePresence>
        {showGameSelect && (
          <motion.div
            key="game-select"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
            style={{
              background: "rgba(30, 27, 75, 0.95)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="bg-white/10 p-8 rounded-2xl shadow-xl flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-6">Select a Game</div>
              <button
                className="px-8 py-4 mb-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                onClick={() => {
                  setShowGameSelect(false);
                  setShowGame(true);
                }}
              >
                Mini Game
              </button>
              <button
                className="px-8 py-4 rounded-full bg-gray-600 text-white font-semibold hover:bg-gray-700 transition"
                onClick={() => setShowGameSelect(false)}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* MiniGame Overlay */}
      <AnimatePresence>
        {showGame && (
          <MiniGame
            onExit={() => {
              setShowGame(false);
              setShowRobot(true);
              setIsDead(false);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default WalkingRobot;