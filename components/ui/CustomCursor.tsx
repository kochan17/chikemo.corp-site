import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isPointer, setIsPointer] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8); // Center the 16px cursor
      cursorY.set(e.clientY - 8);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('data-cursor') === 'pointer'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-[#E60012] rounded-full pointer-events-none z-[9999] mix-blend-exclusion"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isPointer ? 2.5 : 1,
        }}
      />
      {/* Trail */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 border border-[#E60012] rounded-full pointer-events-none z-[9998] opacity-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isPointer ? 3 : 1.5,
          opacity: isPointer ? 0 : 0.5,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;