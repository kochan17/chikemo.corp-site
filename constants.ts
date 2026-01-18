import { CompanyInfo, NavItem, ServiceItem, FeatureItem, FaqItem } from './types';
import { Zap, ShieldCheck, Smartphone, RefreshCw } from 'lucide-react';

export const BRAND_COLORS = {
  primary: '#E60012', // Ticket Red
  primaryHover: '#CC0010',
  dark: '#0a0a0a',
  light: '#ffffff',
  gray: '#f5f5f5',
};

export const COMPANY_INFO: CompanyInfo = {
  name: '株式会社チケモ',
  established: '2025年5月14日',
  representative: '代表取締役 古木 雄大',
  address: '〒170-0013 東京都豊島区東池袋5-7-3',
  business: 'インターネットサービスの企画・開発・運営、ギフト・ライフスタイル事業',
  license: '東京都公安委員会 第305512518791号',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Top', href: '#top' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#showcase' },
  { label: 'Reliability', href: '#trust' },
  { label: 'Usage', href: '#process' },
  { label: 'About', href: '#about' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'chikemo',
    name: 'チケモ',
    tagline: 'Ticket Flea Market',
    description: '「安く、早く、安全に」。金券・チケットの売買をもっと手軽にする、オンライン金券ショップです。',
    link: 'https://chikemo.net',
    image: 'https://storage.googleapis.com/studio-design-asset-files/projects/wQOVVz1XOD/s-4000x2000_ea72e97f-3a2c-4ce6-a7ba-ea39aa62bd7a.webp',
    color: '#E60012',
  },
  {
    id: 'ceremo',
    name: 'セレモ',
    tagline: 'Imabari Towel Gift',
    description: 'お祝いや返礼品に。品質にこだわった今治タオルを、木箱に入れて丁寧にお届けするギフトショップです。',
    link: 'https://ceremo.bigcartel.com/',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2070&auto=format&fit=crop',
    color: '#C5A065', // Gold/Beige for premium feel
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "Simple & Easy",
    description: "難しい操作は必要ありません。どなたでも簡単に、チケットの売買やギフトの注文が可能です。",
    icon: Smartphone,
    className: "md:col-span-2",
  },
  {
    title: "Safety First",
    description: "お金や商品に関わることだから、安全第一。スタッフがしっかりと管理し、トラブルを防ぎます。",
    icon: ShieldCheck,
    className: "md:col-span-1",
  },
  {
    title: "Fair Price",
    description: "チケットはお得に、タオルは適正価格で。お客様に損をさせない価格設定を心がけています。",
    icon: Zap,
    className: "md:col-span-1",
  },
  {
    title: "Customer Support",
    description: "分からないことがあれば、いつでもご相談ください。誠意を持ってサポートさせていただきます。",
    icon: RefreshCw,
    className: "md:col-span-2",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "どのような事業を展開していますか？",
    answer: "現在は金券売買サイト「チケモ」と、今治タオルのお店「セレモ」を運営しています。",
  },
  {
    question: "チケモの手数料について教えてください。",
    answer: "チケモでは出品自体は無料です。取引成立時にのみ手数料を頂戴する仕組みなので、安心してお使いいただけます。",
  },
  {
    question: "セレモの商品はどこで購入できますか？",
    answer: "公式オンラインストアにて販売しております。お祝いや返礼品に最適なギフトセットから、ご自宅用の単品まで幅広く取り揃えております。",
  },
  {
    question: "法人での大口注文は可能ですか？",
    answer: "はい。チケモでの金券大量購入、セレモでの記念品・ノベルティ利用など、法人様向けのプランもご用意しております。お問い合わせフォームよりご相談ください。",
  },
];