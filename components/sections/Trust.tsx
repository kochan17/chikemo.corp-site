import React from 'react';
import { ShieldCheck, UserCheck, Award } from 'lucide-react';

const Trust: React.FC = () => {
  return (
    <section id="trust" className="bg-white text-[#171717] py-32 relative overflow-hidden">
      {/* Background Decor - Clean & Subtle */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-red-50 rounded-full opacity-60 blur-[80px]" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] bg-orange-50 rounded-full opacity-60 blur-[60px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-gray-100 pb-8">
            <div>
                <span className="text-[#E60012] font-mono text-sm tracking-wider block mb-2">02 / 安心・安全への取り組み</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                    当たり前の安心を、<br/>
                    実直に守り抜く。
                </h2>
            </div>
            <p className="text-gray-500 mt-6 md:mt-0 max-w-md font-medium leading-relaxed">
                顔の見えないインターネット取引だからこそ、<br className="hidden md:block" />
                アナログな「人の目」と「確かな基準」を大切にしています。
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Main Card */}
            <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 rounded-[2rem] flex flex-col justify-between group hover:border-[#E60012]/30 transition-colors duration-500">
                <div>
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#E60012] mb-8">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">徹底した安全管理</h3>
                    <p className="text-gray-600 leading-loose mb-8">
                        大切なお金や商品を扱うサービスとして、セキュリティには万全を期しています。
                        派手な機能よりも、まずは「事故が起きないこと」を最優先に。
                        お客様がリスクを感じることなく利用できる、堅実な環境づくりに努めています。
                    </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                            <div className="w-2 h-2 bg-[#E60012] rounded-full" />
                            安全な決済システムの導入
                        </li>
                        <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                            <div className="w-2 h-2 bg-[#E60012] rounded-full" />
                            個人情報の厳格な管理
                        </li>
                        <li className="flex items-center gap-3 text-sm font-bold text-gray-700">
                            <div className="w-2 h-2 bg-[#E60012] rounded-full" />
                            24時間のトラブルサポート体制
                        </li>
                    </ul>
                </div>
            </div>
            
            {/* Right Column */}
            <div className="flex flex-col gap-8">
                {/* Human Check */}
                <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-[2rem] flex-1 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl md:text-2xl font-bold">人の目による確認</h3>
                        <UserCheck className="text-gray-300" size={28} />
                    </div>
                    <p className="text-gray-500 leading-loose text-sm md:text-base">
                        システム任せにせず、スタッフが目視で出品内容や取引状況を確認しています。
                        「機械的な排除」ではなく「人の判断」を入れることで、
                        トラブルの種を未然に防ぎつつ、スムーズな取引をサポートします。
                    </p>
                </div>

                {/* Quality Certified */}
                <div className="bg-[#E60012]/5 border border-[#E60012]/10 p-8 md:p-10 rounded-[2rem] flex-1 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl md:text-2xl font-bold text-[#E60012]">今治タオルの品質保証</h3>
                            <Award className="text-[#E60012]" size={28} />
                        </div>
                        <p className="text-gray-600 leading-loose text-sm md:text-base mb-4">
                            セレモで扱うタオルは、すべて「今治タオル認定商品」です。
                            独自の品質基準に合格した、吸水性が高く肌触りの良いものだけを選定。
                            偽りのない、本物の品質をお届けします。
                        </p>
                        <div className="inline-block bg-white px-4 py-2 rounded-full border border-[#E60012]/20">
                            <span className="text-xs font-bold text-[#E60012] tracking-wider uppercase">今治タオル認定</span>
                        </div>
                    </div>
                    {/* Watermark Decor */}
                    <div className="absolute -bottom-4 -right-4 opacity-5">
                         <Award size={160} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;