export interface TicketItem {
  id: string;
  name: string;
  category: string;
  discount: string;
  image: string;
}

export interface CompanyInfo {
  name: string;
  established: string;
  representative: string;
  address: string;
  business: string;
  license: string;
}

export interface NavItem {
  label: string;
  href: string;
}