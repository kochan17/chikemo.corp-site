import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight } from 'lucide-react';

const MarqueeText: React.FC<{ text: string; direction?: number }> = ({ text, direction = 1 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
      <motion.div
        className="flex gap-8 text-[8rem] md:text-[20rem] font-black leading-none uppercase text-black"
        animate={{ x: direction > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Removed period as requested
  const phrase = "暮らしに、小さな便利と安らぎを";
  const words = phrase.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 * i, ease: "easeOut" },
    }),
  };

  const child: Variants = {
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
      y: 40,
      rotateX: -45,
    },
  };

  return (
    <section id="top" className="relative min-h-[90vh] md:min-h-[110vh] flex flex-col items-center justify-center overflow-hidden bg-white pt-20">
      {/* Background Text */}
      <MarqueeText text="TICKET & GIFT SERVICE " direction={1} />
      
      {/* Abstract Shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] left-[5%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] bg-gradient-to-br from-red-100/50 to-transparent rounded-full blur-[60px] md:blur-[100px] z-0 will-change-transform"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[5%] w-[70vw] md:w-[50vw] h-[70vw] md:h-[50vw] bg-gradient-to-tl from-gray-200/50 to-transparent rounded-full blur-[80px] md:blur-[120px] z-0 will-change-transform"
      />

      <div className="container relative z-10 px-6 flex flex-col items-center text-center">
        <div className="mb-4 md:mb-6 inline-block">
            <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: "100%" }} 
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="h-[1px] bg-[#E60012] mb-3 md:mb-4 mx-auto"
            />
            <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#E60012] uppercase"
            >
                Chikemo Inc.
            </motion.span>
        </div>

        <motion.div 
          className="mb-8 md:mb-10 overflow-hidden perspective-1000"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center max-w-5xl">
            {words.map((word, index) => (
              <motion.span 
                key={index} 
                variants={child} 
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-[#171717] inline-block origin-bottom leading-[1.1]"
              >
                {word === "、" ? <span className="mr-1 md:mr-2">、</span> : word}
                {/* スマホ用改行位置調整 */}
                {(word === "に" || word === "と") && <br className="sm:hidden"/>}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-base md:text-xl text-gray-500 mb-10 md:mb-12 max-w-2xl font-medium leading-relaxed tracking-wide"
        >
          流通を、なめらかに。<br className="md:hidden" />体験を、豊かに。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <MagneticButton 
            className="text-base md:text-lg px-8 md:px-12 py-4 md:py-6 shadow-2xl shadow-red-500/20"
            onClick={() => {
              const element = document.getElementById('showcase');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            サービスを見る <ArrowRight className="ml-2" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;