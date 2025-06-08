import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onComplete }) => {
  const handleGetStarted = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black">
      <div className="relative w-full h-full">
        <Spline
          scene="https://prod.spline.design/MczK2v1eVFV69R9G/scene.splinecode"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          delay: 1,
          duration: 0.8,
          ease: 'easeOut',
        }}
        onClick={handleGetStarted}
        className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 px-6 py-3 sm:px-8 sm:py-4 
                  bg-gradient-to-r from-indigo-600 to-purple-600 
                  text-white text-base sm:text-lg font-bold rounded-full 
                  shadow-[0_0_20px_rgba(139,92,246,0.3)]
                  hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                  transition-all duration-300 
                  hover:scale-110 
                  z-50 
                  cursor-pointer"
      >
        Get Started →
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
