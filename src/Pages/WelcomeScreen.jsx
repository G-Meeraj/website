import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import 'aos/dist/aos.css';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [startExploring, setStartExploring] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        if (startExploring) {
          onLoadingComplete?.();
        }
      }, 800);
    }, 2500);
    return () => clearTimeout(timer);
  }, [onLoadingComplete, startExploring]);

  const handleGetStarted = () => {
    setStartExploring(true);
    onLoadingComplete?.();
  };

  return (
    <AnimatePresence mode="wait">
      {(isLoading || !startExploring) && (
        <motion.div
          className="fixed inset-0 bg-[#000000]"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
        >
          <div className="relative w-full h-screen">
            {isMobile ? (
              // Mobile version of Spline scene
              <Spline
                scene="https://prod.spline.design/MczK2v1eVFV69R9G/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: 'scale(0.8)', // Adjust scale for mobile
                }}
              />
            ) : (
              // Desktop version of Spline scene
              <Spline
                scene="https://prod.spline.design/MczK2v1eVFV69R9G/scene.splinecode"
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            )}
            
            <AnimatePresence>
              {!isLoading && (
                <motion.button
                  className={`
                    absolute px-6 py-3 bg-white text-black rounded-full font-semibold 
                    hover:bg-gray-200 transition-colors duration-300 shadow-lg
                    ${isMobile 
                      ? 'bottom-12 left-1/2 transform -translate-x-1/2' // Mobile positioning
                      : 'bottom-8 right-8' // Desktop positioning
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                >
                  {isMobile ? 'Tap to Start' : 'Get Started'}
                </motion.button>
              )}
            </AnimatePresence>

            {/* Mobile welcome text */}
            {isMobile && !isLoading && (
              <motion.div
                className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <h1 className="text-white text-3xl font-bold mb-2">Welcome</h1>
                <p className="text-gray-300 text-sm px-4">
                  Scroll down to explore my portfolio
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;