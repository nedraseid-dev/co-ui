export interface TestimonialItem {
  id: string;
  index: string;
  name: string;
  role: string;
  company: string;
  companyLogoText: string;
  avatar: string;
  scope: string;
  deployed: string;
  since: string;
  quote: string;
  highlightPhrase: string;
}

export interface NewsItem {
  id: string;
  type: 'featured' | 'row';
  category: 'DEAL' | 'FINANCE' | 'OPS' | 'PRESS' | 'GRID';
  date: string;
  title: string;
  image?: string;
  excerpt?: string;
  readTime?: string;
  fullContent?: string;
}

export interface CapabilitySection {
  id: string;
  label: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  image: string;
}
