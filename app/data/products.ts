import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Plus Savings Account',
    type: 'Account',
    interestRate: 3.5,
    category: 'Savings',
    riskLevel: 'Low',
    description: 'Savings account with high profitability and immediate availability of your funds.',
    benefits: [
      'No maintenance fees',
      'Unlimited withdrawals at own ATMs',
      'Free debit card',
      'Free transfers'
    ],
    requirements: [
      'ID document',
      'Proof of address',
      'Initial deposit of $100'
    ],
    minAmount: 100,
    maxAmount: null,
    term: 'N/A',
    image: '/images/cuenta-ahorro.jpg'
  },
  {
    id: '2',
    name: 'Platinum Credit Card',
    type: 'Card',
    interestRate: 18.9,
    category: 'Credit',
    riskLevel: 'Medium',
    description: 'Credit card with exclusive benefits, point accumulation, and discounts at selected establishments.',
    benefits: [
      'Earn 2 points for every $1 spent',
      'International travel insurance',
      'Access to VIP lounges at airports',
      'Restaurant discounts'
    ],
    requirements: [
      'Minimum income of $2,500 per month',
      'Favorable credit history',
      'Minimum employment tenure of 1 year'
    ],
    minAmount: 1000,
    maxAmount: 25000,
    term: 'N/A',
    image: '/images/tarjeta-platinum.jpg'
  },
  {
    id: '3',
    name: 'Strategic Investment Fund',
    type: 'Investment',
    interestRate: 8.2,
    category: 'Investment',
    riskLevel: 'High',
    description: 'Diversified fund focusing on emerging markets and high-growth sectors.',
    benefits: [
      'Automatic diversification',
      'Professional management',
      'Competitive returns',
      'Detailed quarterly reports'
    ],
    requirements: [
      'Minimum investment of $5,000',
      'Recommended minimum term of 3 years',
      'Complete investor profile'
    ],
    minAmount: 5000,
    maxAmount: null,
    term: '3 years (recommended)',
    image: '/images/fondo-inversion.jpg'
  },
  {
    id: '4',
    name: 'Flexible Personal Loan',
    type: 'Loan',
    interestRate: 12.5,
    category: 'Credit',
    riskLevel: 'Medium',
    description: 'Personal loan with flexible conditions for any project or financial need.',
    benefits: [
      'Approval within 24 hours',
      'No penalty for early repayment',
      'Fixed monthly installments',
      'Terms up to 60 months'
    ],
    requirements: [
      'Minimum income of $1,500 per month',
      'Favorable credit history',
      'Minimum employment tenure of 6 months'
    ],
    minAmount: 1000,
    maxAmount: 50000,
    term: '12-60 months',
    image: '/images/prestamo-personal.jpg'
  },
  {
    id: '5',
    name: 'Comprehensive Life Insurance',
    type: 'Insurance',
    interestRate: null,
    category: 'Protection',
    riskLevel: 'Low',
    description: 'Life insurance with additional coverage for serious illnesses and accidents.',
    benefits: [
      'Death compensation',
      'Coverage for total and permanent disability',
      'Funeral assistance',
      'Advance payment for serious illnesses'
    ],
    requirements: [
      'Age between 18 and 65 years',
      'Simple medical questionnaire',
      'ID document'
    ],
    minAmount: 500,
    maxAmount: 500000,
    term: 'Annual (renewable)',
    image: '/images/seguro-vida.jpg'
  },
  {
    id: '6',
    name: 'Business Current Account',
    type: 'Account',
    interestRate: 0.5,
    category: 'Savings',
    riskLevel: 'Low',
    description: 'Account designed for businesses with specialized services and priority attention.',
    benefits: [
      'Free checkbook',
      'Online banking for businesses',
      'International transfers',
      'Additional cards for collaborators'
    ],
    requirements: [
      'Legal company documentation',
      'Recent financial statements',
      'Initial deposit of $1,000'
    ],
    minAmount: 1000,
    maxAmount: null,
    term: 'N/A',
    image: '/images/cuenta-empresarial.jpg'
  },
  {
    id: '7',
    name: 'Happy Home Mortgage',
    type: 'Mortgage',
    interestRate: 7.8,
    category: 'Credit',
    riskLevel: 'Medium',
    description: 'Housing acquisition financing with the best market rates.',
    benefits: [
      'Financing up to 80% of the property value',
      'Terms up to 20 years',
      'Fixed rate for the first 5 years',
      'No penalty for early payments'
    ],
    requirements: [
      'Minimum income of $2,500 per month',
      'Favorable credit history',
      'Minimum down payment of 20%',
      'Property in approved areas'
    ],
    minAmount: 50000,
    maxAmount: 500000,
    term: 'Up to 20 years',
    image: '/images/hipoteca.jpg'
  },
  {
    id: '8',
    name: 'Secure Retirement Plan',
    type: 'Investment',
    interestRate: 6.5,
    category: 'Investment',
    riskLevel: 'Medium',
    description: 'Retirement savings plan with tax advantages and guaranteed returns.',
    benefits: [
      'Tax deduction',
      'Guaranteed returns',
      'Flexible contributions',
      'Protection against inflation'
    ],
    requirements: [
      'Age between 18 and 60 years',
      'Minimum monthly contribution of $100',
      'ID document'
    ],
    minAmount: 100,
    maxAmount: null,
    term: 'Until retirement',
    image: '/images/plan-retiroSeguro.jpg'
  },
  {
    id: '9',
    name: 'Premium Certificate of Deposit',
    type: 'Investment',
    interestRate: 5.2,
    category: 'Investment',
    riskLevel: 'Low',
    description: 'Fixed-term investment with excellent profitability and guaranteed security.',
    benefits: [
      'Guaranteed interest rate',
      'Protected capital',
      'Possibility of automatic renewal',
      'Transferable certificate'
    ],
    requirements: [
      'Minimum investment of $1,000',
      'Keep the money during the agreed term',
      'Account to receive interest'
    ],
    minAmount: 1000,
    maxAmount: null,
    term: '3, 6, 12 or 18 months',
    image: '/images/certificado-deposito.jpg'
  },
  {
    id: '10',
    name: 'Total Auto Insurance',
    type: 'Insurance',
    interestRate: null,
    category: 'Protection',
    riskLevel: 'Low',
    description: 'Vehicle insurance with comprehensive coverage and 24/7 roadside assistance.',
    benefits: [
      'Material damage coverage',
      'Civil liability',
      'Total theft',
      'Unlimited roadside assistance'
    ],
    requirements: [
      'Vehicle less than 10 years old',
      'Valid vehicle registration',
      'Driver\'s license of the owner'
    ],
    minAmount: 300,
    maxAmount: null,
    term: 'Annual',
    image: '/images/seguro-auto.jpg'
  },
  {
    id: '11',
    name: 'SME Growth Credit',
    type: 'Loan',
    interestRate: 10.8,
    category: 'Credit',
    riskLevel: 'High',
    description: 'Specialized financing for small and medium enterprises in growth stage.',
    benefits: [
      'Preferential rates',
      'Specialized financial advisory',
      'Grace period of 3 months',
      'No mortgage guarantee for smaller amounts'
    ],
    requirements: [
      'Business with minimum 2 years of operation',
      'Financial statements from the last 2 years',
      'Investment plan',
      'Good credit history'
    ],
    minAmount: 25000,
    maxAmount: 200000,
    term: '12-60 months',
    image: '/images/credito-pyme.jpg'
  },
  {
    id: '12',
    name: 'Stock Market Investment',
    type: 'Investment',
    interestRate: null,
    category: 'Investment',
    riskLevel: 'High',
    description: 'Platform for direct investment in national and international stocks with competitive commissions.',
    benefits: [
      'Access to global markets',
      'Advanced technical analysis platform',
      'Personalized advisory',
      'Reduced commissions by volume'
    ],
    requirements: [
      'Minimum investment of $10,000',
      'Completed investor profile',
      'Basic knowledge of securities markets',
      'High risk tolerance'
    ],
    minAmount: 10000,
    maxAmount: null,
    term: 'Variable',
    image: '/images/inversion-acciones.jpg'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  const categories = new Set(products.map(product => product.category));
  return Array.from(categories);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
}; 