import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Activity, Users } from 'lucide-react';

const stats = [
  { label: "年間取引件数", value: "120,000+", icon: Activity },
  { label: "ユーザー満足度", value: "98.5%", icon: Users },
  { label: "不正検知率", value: "99.9%", icon: Shield },
  { label: "平均取引時間", value: "24h", icon: Lock },
];

const Trust: React.FC = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#E60012] rounded-full opacity-[0.05] blur-[120px]" />
         <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900 rounded-full opacity-[0.05] blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-gray-800 pb-8">
            <div>
                <span className="text-[#E60012] font-mono text-sm tracking-wider block mb-2">TRUST & SAFETY</span>
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">Data speaks<br/>Truth.</h2>
            </div>
            <p className="text-gray-400 mt-6 md:mt-0 max-w-sm">
                数字は嘘をつきません。Chikemoが業界最高水準の安全性を提供するプラットフォームである実績です。
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors duration-300 backdrop-blur-sm"
            >
              <div className="mb-6 p-3 bg-white/5 w-fit rounded-lg text-[#E60012] group-hover:bg-[#E60012] group-hover:text-white transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <h3 className="text-5xl font-bold mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Security Badge Area */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#E60012] to-orange-600 rounded-3xl blur-2xl opacity-20" />
                 <div className="relative bg-black border border-gray-800 p-8 md:p-12 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-20">
                        <Lock size={120} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Escrow Protection</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        代金は商品到着まで事務局がお預かりします。<br/>
                        商品が届かない、偽物だった、といったトラブルから<br/>
                        あなたの資産を100%守ります。
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                            事務局による代金一時預かり
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                            到着確認後の支払い実行
                        </li>
                        <li className="flex items-center gap-3 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-[#E60012] rounded-full" />
                            全額返金保証制度
                        </li>
                    </ul>
                 </div>
            </div>
            
            <div className="px-4">
                <h3 className="text-3xl font-bold mb-6">24/7 AI Monitoring</h3>
                <p className="text-gray-400 leading-loose mb-8">
                    最新のAI技術を用いて、24時間365日体制でプラットフォームを監視しています。不正な出品パターン、疑わしいアカウントの挙動を即座に検知し、未然にトラブルを防ぎます。
                </p>
                <div className="h-[1px] w-full bg-gray-800 mb-8" />
                <div className="flex gap-8">
                    <div>
                        <span className="block text-2xl font-bold text-white mb-1">0.1s</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Detection Speed</span>
                    </div>
                    <div>
                        <span className="block text-2xl font-bold text-white mb-1">365d</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Operation</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;