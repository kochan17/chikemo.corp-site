import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section id="about" ref={container} className="py-32 bg-white relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute top-20 right-0 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[15rem] font-black leading-none">ABOUT</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 max-w-4xl">
           <motion.span 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-10%" }}
             className="text-[#E60012] font-mono text-sm tracking-wider block mb-4"
           >
             04 / 私たちについて
           </motion.span>
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-10%" }}
             transition={{ delay: 0.2 }}
             className="text-4xl md:text-6xl font-black tracking-tight text-[#171717] leading-tight"
           >
             シンプルで、正直な、<br />
             役に立つサービスを。
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Visuals */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div 
              style={{ y, willChange: 'transform' }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
               <img 
                 src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                 alt="Chikemo Office" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/10" />
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-full">
                  <span className="text-xs font-bold tracking-widest uppercase">Tokyo HQ</span>
               </div>
            </motion.div>

            <motion.div 
               style={{ y: y2, willChange: 'transform' }}
               className="relative rounded-3xl overflow-hidden aspect-video shadow-xl ml-12 border border-gray-100"
            >
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Team Meeting" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               />
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* History Block */}
            <motion.div 
              className="mb-16 border-l-2 border-gray-100 pl-8 md:pl-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#E60012] rounded-full" />
                創業の経緯
              </h3>
              <p className="text-gray-500 leading-loose text-lg">
                2025年、株式会社チケモは設立されました。
                きっかけはシンプルで、「もっと安く、安心してチケットを買えたらいいのに」という思いと、「本当に良いタオルをもっと多くの人に知ってほしい」という願いからでした。
                <br /><br />
                難しいテクノロジーの話よりも、まずは「使ってよかった」と言っていただけるサービスであることを大切にしています。
              </p>
            </motion.div>

            {/* Mission & Vision Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ delay: 0.4 }}
              >
                 <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-[#171717]">私たちの使命</h3>
                 <p className="text-gray-600 leading-relaxed font-medium">
                   必要なものを、<br />
                   必要なときに、<br />
                   適正な価格で<br />
                   お届けする。
                 </p>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-10%" }}
                 transition={{ delay: 0.5 }}
              >
                 <h3 className="text-xl font-black mb-4 uppercase tracking-wider text-[#171717]">目指す姿</h3>
                 <p className="text-gray-600 leading-relaxed font-medium">
                   ネットでの買い物でも、<br />
                   対面のような安心感を。<br />
                   信頼される<br />
                   商店であり続ける。
                 </p>
              </motion.div>
            </div>

            {/* Quote Block */}
            <motion.div 
              className="mt-20 p-8 bg-gray-50 rounded-3xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ delay: 0.6 }}
            >
              <span className="absolute top-8 left-8 text-6xl text-[#E60012] opacity-20 font-serif">"</span>
              <p className="text-xl md:text-2xl font-bold text-[#171717] relative z-10 leading-relaxed">
                私たちが目指しているのは、特別なことではありません。<br />
                当たり前のことを、当たり前に。<br />
                お客様の「ありがとう」が、私たちの原動力です。
              </p>
              <div className="mt-6">
                 <div>
                    <p className="text-sm font-bold text-[#171717]">古木 雄大</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">代表取締役</p>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;