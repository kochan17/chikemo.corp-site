import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../../constants';
import MagneticButton from '../ui/MagneticButton';
import { ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 ${
        scrolled ? 'glass-panel mx-4 mt-4 rounded-full' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-2">
        <a href="#top" className="text-2xl font-black tracking-tighter text-[#E60012]" data-cursor="pointer">
          Chikemo
        </a>
      </div>

      <nav className="hidden md:flex items-center gap-8">
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

      <MagneticButton 
        className="!py-2 !px-6 text-sm" 
        onClick={() => window.open('https://chikemo.net', '_blank')}
      >
        サービスサイトへ <ExternalLink size={14} />
      </MagneticButton>
    </motion.header>
  );
};

export default Header;