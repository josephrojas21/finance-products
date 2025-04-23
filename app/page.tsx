'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import ProductCard from './components/features/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import HeroBackground from './components/HeroBackground';
import { products, getCategories } from './data/products';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;ß
`;

const Main = styled.main`
  flex: 1;
  padding: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem;
  }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 3rem;
  padding: 7rem 0;
  color: white;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 9rem 0;
    min-height: 600px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 1rem;
  width: 100%;
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['5xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

const ProductsSection = styled.section`
  padding: 3rem 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const categories = getCategories();
  
  const filteredProducts = activeCategory === 'Todos'
    ? products
    : products.filter(product => product.category === activeCategory);
  
  return (
    <PageContainer>
      <HeroSection>
          <HeroBackground />
          <HeroContent>
            <HeroTitle>Soluciones financieras para tu futuro</HeroTitle>
            <HeroSubtitle>
              Descubre nuestra amplia gama de productos financieros diseñados para ayudarte a cumplir tus metas.
              Desde cuentas de ahorro hasta inversiones, tenemos la solución perfecta para ti.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>
      <Main>
      
        
        <ProductsSection id="productos" aria-labelledby="productos-title">
          <SectionTitle id="productos-title">Nuestros Productos</SectionTitle>
          
          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
          
          <ProductsGrid>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductsGrid>
        </ProductsSection>
      </Main>
    </PageContainer>
  );
}
