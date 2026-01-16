import React from 'react';
import { COMPANY_INFO } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer id="company" className="bg-[#171717] text-white pt-24 pb-12">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-black tracking-tighter mb-8 text-white">Chikemo</h2>
            <p className="text-gray-400 max-w-md leading-relaxed">
              チケット売買に革新を。<br />
              テクノロジーの力で、より安全で透明性の高い<br />
              二次流通市場を創造します。
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-800 pb-4">会社概要</h3>
            <dl className="grid grid-cols-1 gap-y-6 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-gray-500">会社名</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.name}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-gray-500">設立</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.established}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-gray-500">代表者</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.representative}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-gray-500">所在地</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.address}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-gray-500">事業内容</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.business}</dd>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <dt className="text-gray-500">許可番号</dt>
                <dd className="sm:col-span-2 font-medium">{COMPANY_INFO.license}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 Chikemo Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">利用規約</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">プライバシーポリシー</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">特定商取引法に基づく表記</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;