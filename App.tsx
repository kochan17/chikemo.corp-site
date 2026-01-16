import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import CustomCursor from './components/ui/CustomCursor';
import SplashScreen from './components/ui/SplashScreen';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Showcase from './components/sections/Showcase';
import Process from './components/sections/Process';
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
    <div className="antialiased text-[#171717]">
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
            <Showcase />
            <Process />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;