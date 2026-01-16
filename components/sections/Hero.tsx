import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const phrase = "金券を、もっと賢く。";
  const words = phrase.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: -45,
    },
  };

  return (
    <section id="top" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-white">
        <motion.div 
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-red-100 rounded-full blur-[120px] opacity-40"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-orange-50 rounded-full blur-[100px] opacity-40"
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <motion.div 
          className="mb-8 overflow-hidden"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center">
            {words.map((word, index) => (
              <motion.span 
                key={index} 
                variants={child} 
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-[#171717] inline-block origin-bottom"
              >
                {word === "、" ? <span className="mr-4">、</span> : word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl font-medium"
        >
          安心・透明・スピーディー。<br className="md:hidden" />
          新しい時代のチケット売買プラットフォーム。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <MagneticButton 
            className="text-lg px-10 py-5"
            onClick={() => {
              const element = document.getElementById('showcase');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            今すぐ探す <ArrowRight className="ml-2" />
          </MagneticButton>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gray-200 overflow-hidden relative">
          <motion.div 
            className="w-full h-1/2 bg-[#E60012] absolute top-0"
            animate={{ top: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;