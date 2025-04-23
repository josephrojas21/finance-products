'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background.light};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)<{ $active?: boolean }>`
  text-decoration: none;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.neutral[700]};
  font-weight: ${({ $active, theme }) => 
    $active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.medium};
  transition: color ${({ theme }) => theme.transitions.fast};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();
  
  return (
    <HeaderContainer className={className}>
      <Link href="/" aria-label="FinTech Solutions - Página principal">
        <Logo>FinTech Solutions</Logo>
      </Link>
      <Nav>
        <NavLink href="/" $active={pathname === '/'}>
          Inicio
        </NavLink>
        <NavLink 
          href="#productos" 
          $active={pathname === '/#productos'}
        >
          Productos
        </NavLink>
        <NavLink 
          href="#nosotros" 
          $active={pathname === '/#nosotros'}
        >
          Nosotros
        </NavLink>
        <NavLink 
          href="#contacto" 
          $active={pathname === '/#contacto'}
        >
          Contacto
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 