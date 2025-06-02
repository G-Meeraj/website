import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const COLORS = [
  { name: 'red', class: 'bg-red-500' },
  { name: 'blue', class: 'bg-blue-500' },
  { name: 'green', class: 'bg-green-500' },
  { name: 'yellow', class: 'bg-yellow-500' }
];

const MemoryGame = ({ onExit }) => {
  const [sequence, setSequence] = useState([]);
  const [playerSequence, setPlayerSequence] = useState([]);
  const [isShowingSequence, setIsShowingSequence] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const addToSequence = () => {
    const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setSequence(prev => [...prev, newColor]);
  };

  const showSequence = async () => {
    setIsShowingSequence(true);
    for (let i = 0; i < sequence.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
    }
    setIsShowingSequence(false);
  };

  const handleColorClick = (color) => {
    if (isShowingSequence) return;

    const newPlayerSequence = [...playerSequence, color];
    setPlayerSequence(newPlayerSequence);

    if (newPlayerSequence[newPlayerSequence.length - 1].name !== 
        sequence[newPlayerSequence.length - 1].name) {
      setGameOver(true);
      return;
    }

    if (newPlayerSequence.length === sequence.length) {
      setScore(prev => prev + 1);
      setPlayerSequence([]);
      setTimeout(() => {
        addToSequence();
      }, 1000);
    }
  };

  useEffect(() => {
    if (sequence.length === 0) {
      addToSequence();
    }
  }, []);

  useEffect(() => {
    if (sequence.length > 0 && playerSequence.length === 0) {
      showSequence();
    }
  }, [sequence]);

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, rgba(49,46,129,0.7) 0%, rgba(162,28,175,0.7) 100%)",
      }}
    >
      <div className="relative w-96 h-96 rounded-xl backdrop-blur-md bg-black/30 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Memory Game</h2>
          <p className="text-white/80">Score: {score}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {COLORS.map((color, index) => (
            <motion.button
              key={color.name}
              className={`h-32 rounded-lg ${color.class} hover:opacity-80 transition-opacity`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                opacity: sequence[sequence.length - 1]?.name === color.name && 
                         isShowingSequence ? 1 : 0.6
              }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>

        {gameOver && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Game Over!</h3>
            <p className="text-white/80 mb-6">Final Score: {score}</p>
            <div className="flex gap-4">
              <button
                className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition"
                onClick={() => {
                  setGameOver(false);
                  setScore(0);
                  setSequence([]);
                  setPlayerSequence([]);
                }}
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
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default MemoryGame;