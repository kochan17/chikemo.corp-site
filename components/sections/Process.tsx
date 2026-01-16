import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Search, ShoppingCart, ShieldCheck, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const steps = [
  {
    icon: Search,
    title: "Search",
    subtitle: "探す",
    desc: "欲しい金券をスマートに検索。詳細な条件絞り込み機能と、リアルタイムな価格更新で、最適な出品を逃しません。",
    color: "#171717"
  },
  {
    icon: ShoppingCart,
    title: "Purchase",
    subtitle: "購入",
    desc: "わずか3タップで購入完了。代金は事務局が一時預かりする「エスクロー決済」を採用。商品が届くまで、お金は守られます。",
    color: "#333333"
  },
  {
    icon: ShieldCheck,
    title: "Receive",
    subtitle: "届く",
    desc: "チケットが手元に届き、中身を確認してから出品者に代金が支払われます。万が一のトラブル時も、全額返金保証で安心。",
    color: "#E60012"
  }
];

const Card: React.FC<{
  i: number;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}> = ({ i, title, subtitle, desc, icon: Icon, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative h-[500px] w-full max-w-4xl rounded-[3rem] p-12 origin-top border border-gray-200 shadow-2xl overflow-hidden bg-white"
      >
        <div className="flex h-full flex-col md:flex-row gap-12 relative z-10">
            {/* Left Content */}
            <div className="w-full md:w-[40%] flex flex-col justify-between">
                <div>
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mb-8">
                        <Icon size={32} className="text-[#171717]" />
                    </div>
                    <span className="text-8xl font-black text-gray-100 absolute top-4 right-8 md:left-0 md:right-auto md:-top-6 -z-10 select-none">
                        0{i + 1}
                    </span>
                    <h2 className="text-4xl font-bold mb-2">{title}</h2>
                    <span className="text-[#E60012] font-bold tracking-widest text-sm uppercase">{subtitle}</span>
                </div>
                <p className="text-gray-600 leading-loose text-lg mt-8 md:mt-0">
                    {desc}
                </p>
            </div>

            {/* Right Visual (Abstract) */}
            <div className="w-full md:w-[60%] h-full rounded-2xl overflow-hidden relative bg-gray-100">
                <motion.div 
                    style={{ scale: imageScale }}
                    className="w-full h-full"
                >
                    {/* Abstract Geometry for Visual Interest */}
                    <div 
                        className="w-full h-full opacity-80"
                        style={{ 
                            background: i === 2 
                                ? `linear-gradient(135deg, ${color} 0%, #ff4d5a 100%)` 
                                : `linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%)` 
                        }} 
                    >
                         {/* Pattern inside the card visual */}
                         <div className="absolute inset-0 opacity-20" 
                              style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
                         />
                         
                         <div className="absolute inset-0 flex items-center justify-center">
                            <Icon size={120} className={i === 2 ? "text-white/20" : "text-black/5"} />
                         </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </motion.div>
    </div>
  )
}

const Process: React.FC = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="process" className="relative mt-32 bg-gray-50" ref={container}>
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12">
            <span className="text-[#E60012] font-mono text-sm tracking-wider">02 / HOW IT WORKS</span>
            <h2 className="text-5xl md:text-7xl font-black mt-4 tracking-tighter text-[#171717]">Simple Process.</h2>
        </div>
      </div>

      <div className="pb-24">
        {
            steps.map( (step, i) => {
            const targetScale = 1 - ( (steps.length - i) * 0.05);
            return <Card key={i} i={i} {...step} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
            })
        }
      </div>

      {/* Final CTA */}
      <div className="h-[50vh] flex items-center justify-center bg-[#171717] text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="z-10 text-center"
         >
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Start?</h2>
            <MagneticButton 
                className="text-xl px-12 py-6 bg-white text-black hover:bg-[#E60012] hover:text-white border-none"
                onClick={() => window.open('https://chikemo.net', '_blank')}
            >
                Chikemoを始める <ArrowRight />
            </MagneticButton>
         </motion.div>
      </div>
    </section>
  );
};

export default Process;