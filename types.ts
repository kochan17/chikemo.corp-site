import React from 'react';

export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  link: string;
  image: string;
  color: string;
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

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
  className?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}