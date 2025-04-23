import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cuenta de Ahorro Plus',
    type: 'Cuenta',
    interestRate: 3.5,
    category: 'Ahorro',
    riskLevel: 'Bajo',
    description: 'Cuenta de ahorro con alta rentabilidad y disponibilidad inmediata de tus fondos.',
    benefits: [
      'Sin comisiones de mantenimiento',
      'Retiros ilimitados en cajeros propios',
      'Tarjeta de débito sin costo',
      'Transferencias gratuitas'
    ],
    requirements: [
      'Documento de identidad',
      'Comprobante de domicilio',
      'Depósito inicial de $100'
    ],
    minAmount: 100,
    maxAmount: null,
    term: 'N/A',
    image: '/images/cuenta-ahorro.jpg'
  },
  {
    id: '2',
    name: 'Tarjeta de Crédito Platinum',
    type: 'Tarjeta',
    interestRate: 18.9,
    category: 'Crédito',
    riskLevel: 'Medio',
    description: 'Tarjeta de crédito con beneficios exclusivos, acumulación de puntos y descuentos en establecimientos seleccionados.',
    benefits: [
      'Acumulación de 2 puntos por cada $1 gastado',
      'Seguro de viaje internacional',
      'Acceso a salas VIP en aeropuertos',
      'Descuentos en restaurantes'
    ],
    requirements: [
      'Ingresos mínimos de $2,500 mensuales',
      'Historial crediticio favorable',
      'Antigüedad laboral mínima de 1 año'
    ],
    minAmount: 1000,
    maxAmount: 25000,
    term: 'N/A',
    image: '/images/tarjeta-platinum.jpg'
  },
  {
    id: '3',
    name: 'Fondo de Inversión Estratégico',
    type: 'Inversión',
    interestRate: 8.2,
    category: 'Inversión',
    riskLevel: 'Alto',
    description: 'Fondo diversificado con enfoque en mercados emergentes y sectores de alto crecimiento.',
    benefits: [
      'Diversificación automática',
      'Gestión profesional',
      'Rendimientos competitivos',
      'Reportes trimestrales detallados'
    ],
    requirements: [
      'Inversión mínima de $5,000',
      'Plazo mínimo recomendado de 3 años',
      'Completar perfil de inversionista'
    ],
    minAmount: 5000,
    maxAmount: null,
    term: '3 años (recomendado)',
    image: '/images/fondo-inversion.jpg'
  },
  {
    id: '4',
    name: 'Préstamo Personal Flexible',
    type: 'Préstamo',
    interestRate: 12.5,
    category: 'Crédito',
    riskLevel: 'Medio',
    description: 'Préstamo personal con condiciones flexibles para cualquier proyecto o necesidad financiera.',
    benefits: [
      'Aprobación en 24 horas',
      'Sin penalización por pago anticipado',
      'Cuotas fijas mensuales',
      'Plazo de hasta 60 meses'
    ],
    requirements: [
      'Ingresos mínimos de $1,500 mensuales',
      'Historial crediticio favorable',
      'Antigüedad laboral mínima de 6 meses'
    ],
    minAmount: 1000,
    maxAmount: 50000,
    term: '12-60 meses',
    image: '/images/prestamo-personal.jpg'
  },
  {
    id: '5',
    name: 'Seguro de Vida Integral',
    type: 'Seguro',
    interestRate: null,
    category: 'Protección',
    riskLevel: 'Bajo',
    description: 'Seguro de vida con coberturas adicionales para enfermedades graves y accidentes.',
    benefits: [
      'Indemnización por fallecimiento',
      'Cobertura por invalidez total y permanente',
      'Asistencia funeraria',
      'Anticipo por enfermedades graves'
    ],
    requirements: [
      'Edad entre 18 y 65 años',
      'Cuestionario médico simple',
      'Documento de identidad'
    ],
    minAmount: 500,
    maxAmount: 500000,
    term: 'Anual (renovable)',
    image: '/images/seguro-vida.jpg'
  },
  {
    id: '6',
    name: 'Cuenta Corriente Empresarial',
    type: 'Cuenta',
    interestRate: 0.5,
    category: 'Ahorro',
    riskLevel: 'Bajo',
    description: 'Cuenta diseñada para negocios con servicios especializados y atención prioritaria.',
    benefits: [
      'Chequera sin costo',
      'Banca en línea para empresas',
      'Transferencias internacionales',
      'Tarjetas adicionales para colaboradores'
    ],
    requirements: [
      'Documentación legal de la empresa',
      'Estados financieros recientes',
      'Depósito inicial de $1,000'
    ],
    minAmount: 1000,
    maxAmount: null,
    term: 'N/A',
    image: '/images/cuenta-empresarial.jpg'
  },
  {
    id: '7',
    name: 'Hipoteca Casa Feliz',
    type: 'Hipoteca',
    interestRate: 7.8,
    category: 'Crédito',
    riskLevel: 'Medio',
    description: 'Financiamiento para adquisición de vivienda con las mejores tasas del mercado.',
    benefits: [
      'Financiamiento de hasta el 80% del valor de la propiedad',
      'Plazos de hasta 20 años',
      'Tasa fija durante los primeros 5 años',
      'Sin penalización por pagos anticipados'
    ],
    requirements: [
      'Ingresos mínimos de $2,500 mensuales',
      'Historial crediticio favorable',
      'Enganche mínimo del 20%',
      'Propiedad en zonas aprobadas'
    ],
    minAmount: 50000,
    maxAmount: 500000,
    term: 'Hasta 20 años',
    image: '/images/hipoteca.jpg'
  },
  {
    id: '8',
    name: 'Plan de Retiro Seguro',
    type: 'Inversión',
    interestRate: 6.5,
    category: 'Inversión',
    riskLevel: 'Medio',
    description: 'Plan de ahorro para el retiro con ventajas fiscales y rentabilidad garantizada.',
    benefits: [
      'Deducción de impuestos',
      'Rentabilidad garantizada',
      'Aportaciones flexibles',
      'Protección contra la inflación'
    ],
    requirements: [
      'Edad entre 18 y 60 años',
      'Aportación mínima mensual de $100',
      'Documento de identidad'
    ],
    minAmount: 100,
    maxAmount: null,
    term: 'Hasta la jubilación',
    image: '/images/plan-retiro.jpg'
  },
  {
    id: '9',
    name: 'Certificado de Depósito Premium',
    type: 'Inversión',
    interestRate: 5.2,
    category: 'Inversión',
    riskLevel: 'Bajo',
    description: 'Inversión a plazo fijo con excelente rentabilidad y seguridad garantizada.',
    benefits: [
      'Tasa de interés garantizada',
      'Capital protegido',
      'Posibilidad de renovación automática',
      'Certificado transferible'
    ],
    requirements: [
      'Inversión mínima de $1,000',
      'Mantener el dinero durante el plazo acordado',
      'Cuenta para recibir intereses'
    ],
    minAmount: 1000,
    maxAmount: null,
    term: '3, 6, 12 o 18 meses',
    image: '/images/certificado-deposito.jpg'
  },
  {
    id: '10',
    name: 'Seguro de Auto Total',
    type: 'Seguro',
    interestRate: null,
    category: 'Protección',
    riskLevel: 'Bajo',
    description: 'Seguro para vehículos con cobertura amplia y asistencia vial 24/7.',
    benefits: [
      'Cobertura por daños materiales',
      'Responsabilidad civil',
      'Robo total',
      'Asistencia vial ilimitada'
    ],
    requirements: [
      'Vehículo con antigüedad menor a 10 años',
      'Tarjeta de circulación vigente',
      'Licencia de conducir del titular'
    ],
    minAmount: 300,
    maxAmount: null,
    term: 'Anual',
    image: '/images/seguro-auto.jpg'
  },
  {
    id: '11',
    name: 'Crédito PyME Crecimiento',
    type: 'Préstamo',
    interestRate: 10.8,
    category: 'Crédito',
    riskLevel: 'Alto',
    description: 'Financiamiento especializado para pequeñas y medianas empresas en etapa de crecimiento.',
    benefits: [
      'Tasas preferenciales',
      'Asesoría financiera especializada',
      'Periodo de gracia de 3 meses',
      'Sin garantía hipotecaria para montos menores'
    ],
    requirements: [
      'Negocio con 2 años mínimo de operación',
      'Estados financieros de los últimos 2 años',
      'Plan de inversión',
      'Buen historial crediticio'
    ],
    minAmount: 25000,
    maxAmount: 200000,
    term: '12-60 meses',
    image: '/images/credito-pyme.jpg'
  },
  {
    id: '12',
    name: 'Inversión en Mercado Accionario',
    type: 'Inversión',
    interestRate: null,
    category: 'Inversión',
    riskLevel: 'Alto',
    description: 'Plataforma para inversión directa en acciones nacionales e internacionales con comisiones competitivas.',
    benefits: [
      'Acceso a mercados globales',
      'Plataforma de análisis técnico avanzado',
      'Asesoría personalizada',
      'Comisiones reducidas por volumen'
    ],
    requirements: [
      'Inversión mínima de $10,000',
      'Perfil de inversionista completado',
      'Conocimientos básicos de mercados de valores',
      'Tolerancia al riesgo alta'
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
  if (category === 'Todos') return products;
  return products.filter(product => product.category === category);
}; 