import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import SplashScreen from './components/ui/SplashScreen';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Showcase from './components/sections/Showcase';
import Trust from './components/sections/Trust';
import Process from './components/sections/Process';
import About from './components/sections/About';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="antialiased text-[#171717] relative">
      {/* Global Noise Overlay for Texture */}
      <div className="fixed inset-0 z-[90] pointer-events-none opacity-[0.03] mix-blend-overlay">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
           <filter id="noiseFilter">
             <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
           </filter>
           <rect width="100%" height="100%" filter="url(#noiseFilter)" />
         </svg>
      </div>

      <SplashScreen onComplete={() => setLoading(false)} />
      
      {!loading && (
        <>
          <CustomCursor />
          
          {/* Progress Bar */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#E60012] origin-left z-[100]"
            style={{ scaleX }}
          />

          <Header />
          
          <main>
            <Hero />
            <Philosophy />
            <Showcase />
            <Trust />
            <Process />
            <About />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;