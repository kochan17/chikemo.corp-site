import React, { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

const Paragraph: React.FC<{ children: string; index: number }> = ({ children, index }) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.25']
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.p
      ref={element}
      style={{ opacity }}
      className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 md:mb-12 tracking-tight transition-colors duration-500"
    >
      {children}
    </motion.p>
  );
};

const Philosophy: React.FC = () => {
  const texts = [
    "チケットは、",
    "単なる紙切れではありません。",
    "それは、誰かの",
    "楽しみな予定であり、",
    "大切な思い出への入り口です。",
    "だからこそ私たちは、",
    "最も安全で、最も透明な",
    "場所を作りました。"
  ];

  return (
    <section className="bg-white py-32 md:py-48 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
            <span className="text-[#E60012] font-mono text-sm tracking-wider block mb-4">00 / PHILOSOPHY</span>
        </div>
        
        {texts.map((text, i) => (
          <Paragraph key={i} index={i}>
            {text}
          </Paragraph>
        ))}

        <div className="mt-32 flex justify-end">
            <div className="max-w-md text-right">
                <p className="text-gray-500 leading-relaxed font-medium">
                    Chikemoはテクノロジーの力で、二次流通市場の不透明さを解消します。エスクロー決済、AI監視、本人確認。あらゆる手段で、あなたの「価値」を守ります。
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;