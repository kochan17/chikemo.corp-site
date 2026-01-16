import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { TICKETS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import { TicketItem } from '../../types';

const TicketCard: React.FC<{ item: TicketItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative w-full aspect-[1.6/1] perspective-1000 group cursor-none"
      onClick={() => window.open('https://chikemo.net', '_blank')}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative rounded-2xl transition-all duration-200 ease-linear shadow-xl"
      >
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900 border border-gray-100"
          style={{ transform: "translateZ(0)" }}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div 
          className="absolute bottom-6 left-6 z-20"
          style={{ transform: "translateZ(50px)" }}
        >
          <span className="inline-block px-3 py-1 bg-[#E60012] text-white text-xs font-bold rounded-full mb-2">
            {item.category}
          </span>
          <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
          <p className="text-gray-300 text-sm">取引価格目安 <span className="text-[#E60012] font-bold text-lg">{item.discount}</span></p>
        </div>

        <div 
          className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30"
          style={{ transform: "translateZ(30px)" }}
        >
          <ArrowUpRight size={20} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <motion.div 
          className="mb-16 md:flex md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              人気の商品券・優待券
            </h2>
            <p className="text-gray-600">
              Chikemoでは、百貨店共通商品券、ギフトカード、旅行券など、<br className="hidden md:block"/>
              多種多様な金券を安全かつお得に購入できます。
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <a href="https://chikemo.net" target="_blank" rel="noreferrer" className="text-[#E60012] font-bold hover:underline flex items-center gap-2 group">
                すべての金券を見る <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TICKETS.map((ticket, index) => (
            <TicketCard key={ticket.id} item={ticket} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;