import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { TICKETS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import { TicketItem } from '../../types';

const HolographicCard: React.FC<{ item: TicketItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  
  // Holographic sheen effect
  const sheenX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const sheenY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

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
        className="w-full h-full relative rounded-2xl transition-all duration-200 ease-linear shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_60px_rgba(230,0,18,0.2)]"
      >
        <div 
          className="absolute inset-0 rounded-2xl overflow-hidden bg-gray-900 border border-gray-100"
          style={{ transform: "translateZ(0)" }}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 grayscale-[30%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          
          {/* Holographic Sheen Layer */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none"
            style={{
                background: useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.4), transparent 60%)`,
                mixBlendMode: "overlay"
            }}
          />
        </div>

        <div 
          className="absolute bottom-8 left-8 z-20"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center gap-3 mb-3">
             <div className="h-[1px] w-8 bg-[#E60012]" />
             <span className="text-[#E60012] text-xs font-bold tracking-widest uppercase">
                {item.category}
             </span>
          </div>
          <h3 className="text-3xl font-black text-white mb-2">{item.name}</h3>
          <p className="text-gray-300 text-sm font-mono tracking-wider">
            DISCOUNT: <span className="text-white font-bold text-xl">{item.discount}</span>
          </p>
        </div>

        <div 
          className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:bg-[#E60012] group-hover:border-[#E60012] transition-colors duration-300"
          style={{ transform: "translateZ(40px)" }}
        >
          <ArrowUpRight size={20} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-[#F8F8F8] relative overflow-hidden">
      {/* Technical Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05]" 
        style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container px-6 mx-auto relative z-10">
        <motion.div 
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between border-b border-gray-200 pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl">
            <span className="text-[#E60012] font-mono text-sm tracking-wider mb-2 block">01 / PRODUCTS</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#171717]">
              Selected<br />Tickets.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
             <p className="text-gray-500 text-right mb-6 hidden md:block leading-relaxed">
               毎日の生活を豊かにする、<br />
               選りすぐりの金券を取り揃えています。
             </p>
             <a href="https://chikemo.net" target="_blank" rel="noreferrer" className="text-[#171717] text-lg font-bold flex items-center gap-2 group hover:text-[#E60012] transition-colors">
                View All Items <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-16 lg:gap-y-20">
          {TICKETS.map((ticket, index) => (
            <HolographicCard key={ticket.id} item={ticket} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;