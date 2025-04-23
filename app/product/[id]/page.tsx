'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getProductById } from '../../data/products';
import { Theme } from '../../utils/styled';

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

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.neutral[700]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 400px;
  }
`;

const PlaceholderImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductHeader = styled.div`
  margin-bottom: 1rem;
`;

const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 0.5rem;
`;

const ProductType = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.neutral[700]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin-bottom: 1.5rem;
`;

const InfoSection = styled.div`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[300]};
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DetailLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const DetailValue = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  color: ${({ theme }) => theme.colors.neutral[800]};
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 0.75rem;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
  }
`;

interface RiskIndicatorProps {
  level: 'Bajo' | 'Medio' | 'Alto';
}

const getRiskColor = (level: 'Bajo' | 'Medio' | 'Alto', theme: Theme) => {
  switch (level) {
    case 'Bajo':
      return theme.colors.success;
    case 'Medio':
      return theme.colors.warning;
    case 'Alto':
      return theme.colors.error;
    default:
      return theme.colors.neutral[500];
  }
};

const RiskContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const RiskLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const RiskBar = styled.div`
  height: 8px;
  background-color: ${({ theme }) => theme.colors.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

const RiskIndicator = styled.div<RiskIndicatorProps>`
  height: 100%;
  width: ${({ level }) => level === 'Bajo' ? '33%' : level === 'Medio' ? '66%' : '100%'};
  background-color: ${({ level, theme }) => getRiskColor(level, theme)};
`;

const RiskDescription = styled.div<RiskIndicatorProps>`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  
  span:last-child {
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ level, theme }) => getRiskColor(level, theme)};
  }
`;

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const product = getProductById(id);
  
  if (!product) {
    return (
      <PageContainer>
        <Header />
        <Main>
          <BackButton onClick={() => router.push('/')}>
            &larr; Volver al catálogo
          </BackButton>
          <h1>Producto no encontrado</h1>
          <p>Lo sentimos, el producto que estás buscando no existe.</p>
        </Main>
        <Footer />
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <Header />
      <Main>
        <BackButton onClick={() => router.push('/')}>
          &larr; Volver al catálogo
        </BackButton>
        
        <ProductContainer>
          <ProductImageContainer>
            {product.image ? (
              <Image 
                src={product.image} 
                alt={product.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            ) : (
              <PlaceholderImage>
                {product.type}
              </PlaceholderImage>
            )}
          </ProductImageContainer>
          
          <ProductInfo>
            <ProductHeader>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductType>{product.type}</ProductType>
            </ProductHeader>
            
            <Description>{product.description}</Description>
            
            <InfoSection>
              <SectionTitle>Detalles del Producto</SectionTitle>
              <DetailsList>
                <DetailItem>
                  <DetailLabel>Categoría</DetailLabel>
                  <DetailValue>{product.category}</DetailValue>
                </DetailItem>
                
                {product.interestRate !== null && (
                  <DetailItem>
                    <DetailLabel>Tasa de Interés</DetailLabel>
                    <DetailValue>{product.interestRate}%</DetailValue>
                  </DetailItem>
                )}
                
                <DetailItem>
                  <DetailLabel>Monto Mínimo</DetailLabel>
                  <DetailValue>${product.minAmount.toLocaleString('es-MX')}</DetailValue>
                </DetailItem>
                
                {product.maxAmount && (
                  <DetailItem>
                    <DetailLabel>Monto Máximo</DetailLabel>
                    <DetailValue>${product.maxAmount.toLocaleString('es-MX')}</DetailValue>
                  </DetailItem>
                )}
                
                <DetailItem>
                  <DetailLabel>Plazo</DetailLabel>
                  <DetailValue>{product.term}</DetailValue>
                </DetailItem>
              </DetailsList>
              
              <RiskContainer>
                <RiskLabel>Nivel de Riesgo</RiskLabel>
                <RiskBar>
                  <RiskIndicator level={product.riskLevel} />
                </RiskBar>
                <RiskDescription level={product.riskLevel}>
                  <span>Bajo</span>
                  <span>Medio</span>
                  <span>Alto</span>
                  <span>{product.riskLevel}</span>
                </RiskDescription>
              </RiskContainer>
            </InfoSection>
            
            <InfoSection>
              <SectionTitle>Beneficios</SectionTitle>
              <ListContainer>
                {product.benefits.map((benefit, index) => (
                  <ListItem key={index}>{benefit}</ListItem>
                ))}
              </ListContainer>
            </InfoSection>
            
            <InfoSection>
              <SectionTitle>Requisitos</SectionTitle>
              <ListContainer>
                {product.requirements.map((requirement, index) => (
                  <ListItem key={index}>{requirement}</ListItem>
                ))}
              </ListContainer>
            </InfoSection>
          </ProductInfo>
        </ProductContainer>
      </Main>
      <Footer />
    </PageContainer>
  );
} 