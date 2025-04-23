'use client';

import React, { useState, useEffect, useRef } from 'react';
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

const MenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav<{ $isOpen: boolean }>`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    max-width: 300px;
    background-color: ${({ theme }) => theme.colors.background.light};
    flex-direction: column;
    padding: 5rem 1.5rem 1.5rem;
    box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 6;
    overflow-y: auto;
  }

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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.75rem 0;
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => ($active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.fast};

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      display: none;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    &:after {
      width: 100%;
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 40px;
  height: 40px;
  padding: 8px;
  position: relative;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  &:focus {
    outline: none;
  }
`;

const MenuBar = styled.span<{ $isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease-in-out;
  
  &:first-child {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
  }
  
  &:last-child {
    transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'rotate(0)'};
  }
`;

interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (isMenuOpen && event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    // Evitar scroll cuando el menú está abierto en móvil
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    closeMenu();
  }, [pathname]);
  
  return (
    <HeaderContainer className={className}>
      <Link href="/" aria-label="FinTech Solutions - Página principal">
        <Logo>FinTech Solutions</Logo>
      </Link>
      
      <MenuButton 
        ref={buttonRef}
        onClick={toggleMenu} 
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
      >
        <MenuBar $isOpen={isMenuOpen} />
        <MenuBar $isOpen={isMenuOpen} />
        <MenuBar $isOpen={isMenuOpen} />
      </MenuButton>
      
      <MenuOverlay $isOpen={isMenuOpen} onClick={closeMenu} />
      
      <Nav ref={navRef} $isOpen={isMenuOpen}>
        <NavLink href="/" $active={pathname === '/'} onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink 
          href="/#productos" 
          $active={pathname === '/#productos'}
          onClick={closeMenu}
        >
          Products
        </NavLink>
        <NavLink 
          href="/#nosotros" 
          $active={pathname === '/#nosotros'}
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink 
          href="/#contact" 
          $active={pathname === '/#contacto'}
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 