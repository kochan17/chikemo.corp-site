import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { SERVICES } from '../../constants';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../../types';

const ServiceCard: React.FC<{ item: ServiceItem; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full h-[600px] perspective-1000 group cursor-none mb-12"
      onClick={() => window.open(item.link, '_blank')}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative rounded-3xl transition-all duration-200 ease-linear shadow-[0_20px_50px_rgba(0,0,0,0.15)] group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
      >
        <div 
          className="absolute inset-0 rounded-3xl overflow-hidden bg-gray-900 border border-gray-100"
          style={{ transform: "translateZ(0)" }}
        >
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
          
          {/* Holographic Sheen Layer */}
          <motion.div 
            className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none"
            style={{
                background: useMotionTemplate`radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255,255,255,0.4), transparent 60%)`,
                mixBlendMode: "overlay"
            }}
          />
        </div>

        <div 
          className="absolute bottom-12 left-8 md:left-12 z-20 max-w-lg"
          style={{ transform: "translateZ(60px)" }}
        >
          <div className="flex items-center gap-3 mb-6">
             <div className="h-[2px] w-12" style={{ backgroundColor: item.color }} />
             <span style={{ color: item.color }} className="text-sm font-bold tracking-widest uppercase">
                {item.tagline}
             </span>
          </div>
          <h3 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">{item.name}</h3>
          <p className="text-gray-200 text-lg font-medium leading-relaxed drop-shadow-md">
            {item.description}
          </p>
        </div>

        <div 
          className="absolute top-8 right-8 w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-300 group-hover:scale-110"
          style={{ transform: "translateZ(40px)", backgroundColor: item.color }}
        >
          <ArrowUpRight size={28} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Showcase: React.FC = () => {
  return (
    <section id="showcase" className="py-32 bg-[#F8F8F8] relative overflow-hidden">
      {/* Grid Background */}
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
          viewport={{ once: true, margin: "-10%" }}
        >
          <div className="max-w-2xl">
            <span className="text-[#E60012] font-mono text-sm tracking-wider mb-2 block">01 / サービス紹介</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-[#171717]">
              サービス一覧
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end">
             <p className="text-gray-500 text-right mb-6 hidden md:block leading-relaxed">
               私たちが提供している<br />
               ２つのサービスについて。
             </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} item={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;