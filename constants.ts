import { CompanyInfo, NavItem, TicketItem } from './types';

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
  { label: '金券を探す', href: '#showcase' },
  { label: '使い方', href: '#process' },
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