import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Search, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';

const steps = [
  {
    icon: Search,
    title: "探す",
    subtitle: "検索",
    desc: "欲しいチケットがすぐに見つかる。素敵なギフトが選びやすい。シンプルで分かりやすい画面作りを心がけています。",
    color: "#171717",
    image: "https://images.unsplash.com/photo-1512428559087-560fa0db7989?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: ShoppingBag,
    title: "買う",
    subtitle: "購入",
    desc: "購入手続きはとても簡単です。チケモなら安心して決済でき、セレモなら丁寧な梱包でお手元へお届けします。",
    color: "#333333",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    icon: Heart,
    title: "届く",
    subtitle: "到着",
    desc: "チケットで得られる楽しみや、タオルの心地よい肌触り。私たちは「モノ」を通じて、お客様の毎日に小さな喜びをお届けします。",
    color: "#E60012",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2024&auto=format&fit=crop"
  }
];

const Card: React.FC<{
  i: number;
  title: string;
  subtitle: string;
  desc: string;
  icon: React.ElementType;
  color: string;
  image: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}> = ({ i, title, subtitle, desc, icon: Icon, color, image, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-[700px] md:h-screen flex items-center justify-center sticky top-0 px-4 md:px-0">
      <motion.div 
        style={{ scale, top: `calc(-2vh + ${i * 20}px)`, willChange: "transform" }} 
        className="flex flex-col relative h-[550px] md:h-[500px] w-full max-w-4xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 origin-top border border-gray-200 shadow-2xl overflow-hidden bg-white"
      >
        <div className="flex h-full flex-col md:flex-row gap-6 md:gap-12 relative z-10">
            {/* Left Content */}
            <div className="w-full md:w-[45%] flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gray-50 flex items-center justify-center mb-6 md:mb-8">
                        <Icon size={24} className="text-[#171717]" />
                    </div>
                    <span className="text-6xl md:text-8xl font-black text-gray-100 absolute top-4 right-6 md:left-0 md:right-auto md:-top-6 -z-10 select-none">
                        0{i + 1}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-1 md:mb-2 tracking-tight">{title}</h2>
                    <span className="text-[#E60012] font-bold tracking-widest text-xs md:text-sm uppercase">{subtitle}</span>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm md:text-lg mt-4 md:mt-0">
                    {desc}
                </p>
            </div>

            {/* Right Visual (Image) */}
            <div className="w-full md:w-[55%] h-48 md:h-full rounded-xl md:rounded-2xl overflow-hidden relative bg-gray-100 mt-auto md:mt-0">
                <motion.div 
                    style={{ scale: imageScale, willChange: "transform" }}
                    className="w-full h-full relative"
                >
                    <img 
                        src={image} 
                        alt={title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/5" />
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
    <section id="process" className="relative mt-20 md:mt-32 bg-gray-50" ref={container}>
      <div className="container mx-auto px-6 pt-16 md:pt-24 pb-12">
        <div className="text-center mb-8 md:mb-12">
            <span className="text-[#E60012] font-mono text-sm tracking-wider">03 / ご利用方法</span>
            <h2 className="text-4xl md:text-7xl font-black mt-2 md:mt-4 tracking-tighter text-[#171717]">ご利用の流れ</h2>
        </div>
      </div>

      <div className="pb-12 md:pb-24">
        {
            steps.map( (step, i) => {
            const targetScale = 1 - ( (steps.length - i) * 0.04);
            return <Card key={i} i={i} {...step} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
            })
        }
      </div>

      {/* Final CTA */}
      <div className="h-[60vh] md:h-[50vh] flex items-center justify-center bg-[#171717] text-white relative overflow-hidden px-6">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="z-10 text-center w-full max-w-xl"
         >
            <h2 className="text-3xl md:text-6xl font-black mb-10 tracking-tight">各店舗のご案内</h2>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <MagneticButton 
                    className="w-full sm:w-auto text-lg px-10 py-5 bg-[#E60012] text-white hover:bg-[#CC0010] border-none shadow-xl"
                    onClick={() => window.open('https://chikemo.net', '_blank')}
                >
                    チケモへ <ArrowRight size={18} />
                </MagneticButton>
                 <MagneticButton 
                    className="w-full sm:w-auto text-lg px-10 py-5 bg-white !text-[#171717] hover:bg-gray-100 border-none shadow-xl"
                    onClick={() => window.open('https://ceremo.bigcartel.com/', '_blank')}
                >
                    セレモへ <ArrowRight size={18} />
                </MagneticButton>
            </div>
         </motion.div>
      </div>
    </section>
  );
};

export default Process;