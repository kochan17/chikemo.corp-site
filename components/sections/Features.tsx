import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center md:text-left">
          <motion.span 
            className="text-[#E60012] font-bold tracking-widest uppercase text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Chikemo?
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-black mt-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            選ばれるには、<br />理由があります。
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 p-8 ${feature.className || ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="mb-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#171717] group-hover:text-white group-hover:bg-[#E60012] transition-colors duration-300">
                  <feature.icon size={28} />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/20 rounded-full blur-2xl group-hover:bg-[#E60012]/10 transition-colors duration-500 transform translate-x-10 -translate-y-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;