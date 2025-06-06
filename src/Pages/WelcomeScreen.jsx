import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import 'aos/dist/aos.css';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [startExploring, setStartExploring] = useState(false);

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
            <Spline
              scene="https://prod.spline.design/MczK2v1eVFV69R9G/scene.splinecode"
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0
              }}
            />
            <AnimatePresence>
              {!isLoading && (
                <motion.button
                  className="absolute bottom-8 right-8 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGetStarted}
                >
                  Get Started
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;