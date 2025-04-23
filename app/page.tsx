'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import { products, getCategories } from './data/products';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 0;
  }
`;

const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  }
`;

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[600]};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
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
      <Header />
      
      <Main>
        <HeroSection>
          <HeroTitle>Soluciones financieras para tu futuro</HeroTitle>
          <HeroSubtitle>
            Descubre nuestra amplia gama de productos financieros diseñados para ayudarte a cumplir tus metas.
            Desde cuentas de ahorro hasta inversiones, tenemos la solución perfecta para ti.
          </HeroSubtitle>
        </HeroSection>
        
        <section id="productos" aria-labelledby="productos-title">
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
        </section>
      </Main>
      
      <Footer />
    </PageContainer>
  );
}
