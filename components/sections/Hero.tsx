import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

const MarqueeText: React.FC<{ text: string; direction?: number }> = ({ text, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.04] pointer-events-none select-none absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
      <motion.div
        className="flex gap-8 text-[12rem] md:text-[20rem] font-black leading-none uppercase text-black"
        animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
      y: 80,
      rotateX: -45,
    },
  };

  return (
    <section id="top" className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Kinetic Background */}
      <MarqueeText text="SECURE TRUST SMART " direction={1} />
      
      {/* Abstract Shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-[100px] z-0"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[5%] w-[50vw] h-[50vw] bg-gradient-to-tl from-orange-100/50 to-transparent rounded-full blur-[120px] z-0"
      />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <div className="mb-6 inline-block">
            <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ duration: 1, delay: 0.5 }}
                className="h-[1px] bg-[#E60012] mb-4 mx-auto"
            />
            <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xs font-bold tracking-[0.3em] text-[#E60012] uppercase"
            >
                Next Gen Ticket Platform
            </motion.span>
        </div>

        <motion.div 
          className="mb-10 overflow-hidden perspective-1000"
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
          className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl font-medium leading-relaxed tracking-wide"
        >
          テクノロジーで、二次流通を透明に。<br className="md:hidden" />
          Chikemoは、最も安全でスマートな<br className="md:hidden" />
          チケット売買プラットフォームです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <MagneticButton 
            className="text-lg px-12 py-6 shadow-2xl shadow-red-500/20"
            onClick={() => {
              const element = document.getElementById('showcase');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            体験を始める <ArrowRight className="ml-2" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;