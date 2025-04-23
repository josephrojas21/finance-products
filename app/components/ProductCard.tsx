'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../types/product';
import { Theme } from '../utils/styled';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.transitions.default}, 
              box-shadow ${({ theme }) => theme.transitions.default};
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardHeader = styled.div`
  margin-bottom: 0.75rem;
`;

const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[900]};
  margin-bottom: 0.25rem;
`;

const ProductType = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const DetailLabel = styled.span`
  color: ${({ theme }) => theme.colors.neutral[600]};
`;

const DetailValue = styled.span`
  color: ${({ theme }) => theme.colors.neutral[900]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

type RiskLevelProps = {
  level: 'Bajo' | 'Medio' | 'Alto';
};

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

const RiskLevel = styled.span<RiskLevelProps>`
  display: inline-flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ level, theme }) => getRiskColor(level, theme)};
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ level, theme }) => getRiskColor(level, theme)};
    margin-right: 6px;
  }
`;

const ViewButton = styled(Link)`
  display: inline-block;
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[800]};
  }
`;

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, className }) => {
  return (
    <Card className={className}>
      <ImageContainer>
        {product.image ? (
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <PlaceholderImage>
            {product.type}
          </PlaceholderImage>
        )}
      </ImageContainer>
      
      <CardContent>
        <CardHeader>
          <ProductName>{product.name}</ProductName>
          <ProductType>{product.type}</ProductType>
        </CardHeader>
        
        <ProductDetails>
          {product.interestRate !== null && (
            <Detail>
              <DetailLabel>Tasa de Interés</DetailLabel>
              <DetailValue>{product.interestRate}%</DetailValue>
            </Detail>
          )}
          
          <Detail>
            <DetailLabel>Categoría</DetailLabel>
            <DetailValue>{product.category}</DetailValue>
          </Detail>
          
          <Detail>
            <DetailLabel>Nivel de Riesgo</DetailLabel>
            <RiskLevel level={product.riskLevel}>{product.riskLevel}</RiskLevel>
          </Detail>
          
          <Detail>
            <DetailLabel>Monto Mínimo</DetailLabel>
            <DetailValue>${product.minAmount.toLocaleString('es-MX')}</DetailValue>
          </Detail>
        </ProductDetails>
        
        <ViewButton href={`/product/${product.id}`} aria-label={`Ver detalles de ${product.name}`}>
          Ver Detalles
        </ViewButton>
      </CardContent>
    </Card>
  );
};

export default ProductCard; 