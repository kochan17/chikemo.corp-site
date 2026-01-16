import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'solid' | 'outline' | 'ghost';
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'solid' 
}) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative px-8 py-4 rounded-full font-bold transition-colors duration-300 flex items-center justify-center gap-2 overflow-hidden";
  
  const variants = {
    solid: "bg-[#E60012] text-white hover:bg-[#CC0010]",
    outline: "border border-[#E60012] text-[#E60012] hover:bg-[#E60012] hover:text-white",
    ghost: "text-[#171717] hover:text-[#E60012]"
  };

  return (
    <motion.button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      data-cursor="pointer"
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;