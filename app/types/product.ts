export interface Product {
  id: string;
  name: string;
  type: string;
  interestRate: number | null;
  category: string;
  riskLevel: 'Bajo' | 'Medio' | 'Alto';
  description: string;
  benefits: string[];
  requirements: string[];
  minAmount: number;
  maxAmount: number | null;
  term: string;
  image: string;
} 