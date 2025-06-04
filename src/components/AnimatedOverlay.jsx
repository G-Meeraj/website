import React from "react";
import { motion } from "framer-motion";

const blobs = [
  {
    style: "top-10 left-10 w-72 h-72 bg-gradient-to-br from-indigo-500/30 to-purple-500/30",
    animate: { x: [0, 30, -30, 0], y: [0, 20, -20, 0], scale: [1, 1.1, 1, 1] },
    delay: 0,
  },
  {
    style: "bottom-20 right-20 w-60 h-60 bg-gradient-to-tr from-purple-400/20 to-pink-400/20",
    animate: { x: [0, -20, 20, 0], y: [0, -15, 15, 0], scale: [1, 1.05, 1, 1] },
    delay: 1,
  },
  {
    style: "top-1/2 left-1/2 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-purple-400/10",
    animate: { x: [0, 40, -40, 0], y: [0, 30, -30, 0], scale: [1, 1.08, 1, 1] },
    delay: 2,
  },
];

const AnimatedOverlay = () => (
  <div className="pointer-events-none fixed inset-0 z-0">
    {blobs.map((blob, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full blur-3xl ${blob.style}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: blob.animate.scale,
          x: blob.animate.x,
          y: blob.animate.y,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          delay: blob.delay,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default AnimatedOverlay;