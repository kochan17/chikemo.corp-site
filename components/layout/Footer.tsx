import React from 'react';
import { COMPANY_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#171717] text-white pt-24 md:pt-32 pb-12 overflow-hidden">
      <div className="container px-6 mx-auto">
        
        {/* Massive Logo */}
        <div className="border-b border-gray-800 pb-12 md:pb-16 mb-16 md:mb-20">
            <h1 className="text-[18vw] md:text-[12vw] leading-none font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 opacity-90 select-none">
                Chikemo
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 mb-16 md:mb-20">
          <div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed max-w-md text-gray-200">
              チケット売買に革新を。<br />
              テクノロジーの力で、<br />
              より安全で透明性の高い<br />
              二次流通市場を創造します。
            </p>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 text-sm md:text-base border-l border-gray-800 pl-0 md:pl-12">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-2">
                <dt className="text-gray-500 font-mono text-xs uppercase tracking-widest">Company</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.name}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-2">
                <dt className="text-gray-500 font-mono text-xs uppercase tracking-widest">Established</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.established}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-2">
                <dt className="text-gray-500 font-mono text-xs uppercase tracking-widest">CEO</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.representative}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-2">
                <dt className="text-gray-500 font-mono text-xs uppercase tracking-widest">Address</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.address}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 md:gap-2">
                <dt className="text-gray-500 font-mono text-xs uppercase tracking-widest">License</dt>
                <dd className="sm:col-span-2 font-medium text-xs md:text-sm">{COMPANY_INFO.license}</dd>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[10px] md:text-xs font-mono uppercase tracking-widest">
            © 2025 Chikemo Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;