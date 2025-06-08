import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onComplete }) => {
  const handleGetStarted = () => {
    onComplete();
  };

  return (
    <section className="w-screen h-screen relative overflow-hidden bg-black">
      {/* Spline 3D Background */}
      <div className="absolute top-0 left-0 w-screen h-screen z-0">
        <Spline
          scene="https://prod.spline.design/LJ6Y-EskbPVFQKBS/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Button Layer */}
      <div className="absolute top-0 left-0 w-screen h-screen flex justify-end items-end p-6 z-10">
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
          className="px-6 py-3 
                     bg-gradient-to-r from-indigo-600 to-purple-600 
                     text-white text-base sm:text-lg font-bold rounded-full 
                     shadow-[0_0_20px_rgba(139,92,246,0.3)]
                     hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
                     transition-all duration-300 
                     hover:scale-110 
                     cursor-pointer"
        >
          Get Started →
        </motion.button>
      </div>
    </section>
  );
};

export default WelcomeScreen;
