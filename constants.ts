import { CompanyInfo, NavItem, TicketItem, FeatureItem, FaqItem } from './types';
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
  business: 'チケット売買プラットフォーム「Chikemo」の企画・開発・運営、インターネットサービスの開発・運営',
  license: '東京都公安委員会 第305512518791号',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Top', href: '#top' },
  { label: '特徴', href: '#features' },
  { label: '金券を探す', href: '#showcase' },
  { label: '使い方', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: '会社概要', href: '#company' },
];

export const TICKETS: TicketItem[] = [
  {
    id: '1',
    name: 'Amazon Gift',
    category: 'ギフト券',
    discount: '94%~',
    image: 'https://picsum.photos/400/250?random=1',
  },
  {
    id: '2',
    name: 'Department Store',
    category: '百貨店共通商品券',
    discount: '96%~',
    image: 'https://picsum.photos/400/250?random=2',
  },
  {
    id: '3',
    name: 'Airline Stock',
    category: '航空株主優待券',
    discount: '50%OFF',
    image: 'https://picsum.photos/400/250?random=3',
  },
  {
    id: '4',
    name: 'Travel Card',
    category: '旅行券',
    discount: '92%~',
    image: 'https://picsum.photos/400/250?random=4',
  },
];

export const FEATURES: FeatureItem[] = [
  {
    title: "業界最安級の手数料",
    description: "売り手も買い手も嬉しい、業界最低水準の手数料を実現。余計なコストをかけずに、賢く売買できます。",
    icon: Zap,
    className: "md:col-span-2",
  },
  {
    title: "安心のエスクロー決済",
    description: "商品が届いて確認するまで、代金は事務局が一時預かり。詐欺やトラブルを未然に防ぎます。",
    icon: ShieldCheck,
    className: "md:col-span-1",
  },
  {
    title: "スマホ完結、即日出品",
    description: "アプリ不要、ブラウザから写真を撮ってアップするだけ。最短1分で出品完了。",
    icon: Smartphone,
    className: "md:col-span-1",
  },
  {
    title: "24時間365日の監視体制",
    description: "AIと有人監視のハイブリッド体制で、不正出品や疑わしい取引を常時モニタリングしています。",
    icon: RefreshCw,
    className: "md:col-span-2",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "出品手数料はいくらですか？",
    answer: "出品自体は無料です。取引が成立した際のみ、販売価格の数%を手数料としていただいております（キャンペーンにより変動あり）。",
  },
  {
    question: "購入した商品はいつ届きますか？",
    answer: "出品者によりますが、原則として購入確定から2日以内の発送をお願いしています。発送通知後、追跡番号で状況を確認できます。",
  },
  {
    question: "トラブルが起きた場合は？",
    answer: "商品が届かない、内容が違うなどのトラブル時は、受取評価をする前に事務局へご連絡ください。代金の支払いを保留し、調査を行います。",
  },
  {
    question: "本人確認は必要ですか？",
    answer: "はい、安心・安全な取引環境を維持するため、初回出品時および一定金額以上の購入時に本人確認書類の提出をお願いしております。",
  },
];