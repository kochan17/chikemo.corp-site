import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const Paragraph: React.FC<{ children: string; index: number }> = ({ children, index }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.6']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.p
      ref={element}
      style={{ opacity }}
      className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 md:mb-12 tracking-tight transition-colors duration-500 will-change-[opacity]"
    >
      {children}
    </motion.p>
  );
};

const Philosophy: React.FC = () => {
  const texts = [
    "チケットという、",
    "楽しみへのパスポート。",
    "タオルという、",
    "毎日の暮らしの必需品。",
    "私たちが扱っているのは、",
    "決して派手なものでは",
    "ないかもしれません。",
    "けれど、だからこそ、",
    "正直に、丁寧に届けたい。",
    "それが私たちの想いです。"
  ];

  return (
    <section id="philosophy" className="bg-white py-32 md:py-48 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
            <span className="text-[#E60012] font-mono text-sm tracking-wider block mb-4">00 / 私たちの想い</span>
        </div>
        
        {texts.map((text, i) => (
          <Paragraph key={i} index={i}>
            {text}
          </Paragraph>
        ))}

        <div className="mt-32 flex justify-end">
            <div className="max-w-lg text-right">
                <p className="text-gray-500 leading-relaxed font-medium">
                    株式会社チケモは、誰でも安心して使えるチケット売買サービス「チケモ」と、品質にこだわった今治タオルのお店「セレモ」を運営しています。お客様の「欲しい」に、誠実にお応えします。
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;