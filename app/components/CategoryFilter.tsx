'use client';

import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 1rem;
  }
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.background.light};
  color: ${({ theme, $active }) => 
    $active ? 'white' : theme.colors.neutral[700]};
  border: 1px solid ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.neutral[300]};
    
  &:hover {
    background-color: ${({ theme, $active }) => 
      $active ? theme.colors.primary : theme.colors.neutral[200]};
    border-color: ${({ theme, $active }) => 
      $active ? theme.colors.primary : theme.colors.neutral[400]};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onChange,
  className,
}) => {
  return (
    <FilterContainer className={className}>
      <FilterButton
        $active={activeCategory === 'Todos'}
        onClick={() => onChange('Todos')}
        aria-pressed={activeCategory === 'Todos'}
        aria-label="Filtrar por: Todos los productos"
      >
        Todos
      </FilterButton>
      
      {categories.map((category) => (
        <FilterButton
          key={category}
          $active={activeCategory === category}
          onClick={() => onChange(category)}
          aria-pressed={activeCategory === category}
          aria-label={`Filtrar por: ${category}`}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default CategoryFilter; 