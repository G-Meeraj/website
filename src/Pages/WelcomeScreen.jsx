import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const WelcomeScreen = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadingComplete?.();
      }, 1000); // Increased exit transition
    }, 3000); // Changed from 2500 to 3000ms
    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 1.0, // Increased from 0.6 to 1.0 seconds
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-[#000000]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { duration: 1.0 } // Added entry animation duration
          }}
          exit="exit"
          variants={containerVariants}
        >
          <div className="relative w-full h-screen">
            <Spline 
              scene="https://prod.spline.design/ZB-vvUWNhwUl6DO6/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;