import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
      setTimeout(onComplete, 1000); // Allow exit animation to finish
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isPresent && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#E60012]"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-white text-6xl font-black tracking-tighter"
          >
            Chikemo
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;