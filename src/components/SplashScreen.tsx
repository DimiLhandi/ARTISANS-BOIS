import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const name = "JULIEN DUBOIS";
  const letters = name.split("");

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.45, 0, 0.55, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory"
    >
      <div className="flex mb-12 overflow-hidden">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="text-ink font-akkurat text-4xl md:text-6xl tracking-widest"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={onComplete}
        className="px-8 py-3 bg-wood-dark text-ivory rounded-artisan font-medium tracking-widest hover:bg-opacity-90 transition-colors uppercase text-sm"
      >
        ACCÉDER
      </motion.button>
    </motion.div>
  );
}
