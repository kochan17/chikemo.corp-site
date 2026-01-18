import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import MagneticButton from '../ui/MagneticButton';
import { ExternalLink, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150 && !isMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-4 sm:px-6 py-4 transition-all duration-500 ${
          scrolled ? 'glass-panel mx-4 mt-4 rounded-full shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          <a href="#top" className="text-xl sm:text-2xl font-black tracking-tighter text-[#E60012]" data-cursor="pointer">
            Chikemo
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#171717] hover:text-[#E60012] transition-colors relative group"
              data-cursor="pointer"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E60012] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <MagneticButton 
              className="!py-2 !px-4 text-[10px] sm:text-xs bg-[#E60012] text-white hover:bg-[#CC0010] border-none"
              onClick={() => window.open('https://chikemo.net', '_blank')}
            >
              チケモ <ExternalLink size={12} />
            </MagneticButton>
            <MagneticButton 
              className="!py-2 !px-4 text-[10px] sm:text-xs bg-white !text-[#171717] border border-gray-200 hover:bg-gray-50 shadow-sm" 
              onClick={() => window.open('https://ceremo.bigcartel.com/', '_blank')}
            >
              セレモ <ExternalLink size={12} />
            </MagneticButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            className="xl:hidden p-2 text-[#171717] hover:text-[#E60012] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col p-8 pt-24"
          >
            <nav className="flex flex-col gap-6 mb-12">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter hover:text-[#E60012] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-auto">
              <span className="text-gray-400 font-mono text-sm tracking-widest uppercase">Visit Stores</span>
              <div className="flex flex-col gap-4">
                 <button 
                  onClick={() => window.open('https://chikemo.net', '_blank')}
                  className="w-full py-5 bg-[#E60012] text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                >
                  チケモ <ExternalLink size={18} />
                </button>
                <button 
                  onClick={() => window.open('https://ceremo.bigcartel.com/', '_blank')}
                  className="w-full py-5 bg-white text-[#171717] border border-gray-200 shadow-sm hover:bg-gray-50 rounded-2xl font-bold text-lg flex items-center justify-center gap-2"
                >
                  セレモ <ExternalLink size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;