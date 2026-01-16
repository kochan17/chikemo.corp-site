import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, ShieldCheck, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const steps = [
  {
    icon: Search,
    title: "1. 探す",
    desc: "欲しい金券を検索。詳細な条件で絞り込み、最適な価格の出品を見つけましょう。"
  },
  {
    icon: ShoppingCart,
    title: "2. 購入",
    desc: "1分で購入完了。代金は事務局が一時預かりするエスクロー決済なので安心です。"
  },
  {
    icon: ShieldCheck,
    title: "3. 届く",
    desc: "チケットが手元に届き、内容を確認してから出品者に代金が支払われます。"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 bg-white relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            className="text-[#E60012] font-bold tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How it works
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-6xl font-black mt-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            購入は驚くほど簡単
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-100 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative z-10 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-24 h-24 bg-white rounded-full border border-gray-100 shadow-xl flex items-center justify-center mb-8 group transition-colors duration-500 hover:border-[#E60012]">
                <step.icon size={32} className="text-[#171717] group-hover:text-[#E60012] transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 flex justify-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="p-[2px] bg-gradient-to-r from-[#E60012] via-orange-500 to-[#E60012] rounded-full">
                    <div className="bg-white rounded-full p-2">
                        <MagneticButton 
                            className="text-xl px-12 py-6 bg-[#171717] hover:bg-[#000000] text-white"
                            onClick={() => window.open('https://chikemo.net', '_blank')}
                        >
                            Chikemoを始める <ArrowRight />
                        </MagneticButton>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;