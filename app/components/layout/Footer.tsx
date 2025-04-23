'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.neutral[800]};
  color: ${({ theme }) => theme.colors.neutral[200]};
  padding: 3rem 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 4rem 2rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[100]};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.neutral[400]};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  max-width: 400px;
`;

const ColumnTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.neutral[100]};
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral[400]};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 3rem auto 0;
  padding-top: 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[700]};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  margin-bottom: 1rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 0;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const LegalLink = styled(Link)`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  text-decoration: none;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer className={className}>
      <FooterContent>
        <Column>
          <Logo>FinTech Solutions</Logo>
          <Description>
            Innovative financial solutions for individuals and businesses.
            We drive your growth with cutting-edge technology and products
            designed for the modern world.
          </Description>
        </Column>
        
        <Column>
          <ColumnTitle>Products</ColumnTitle>
          <FooterLink href="/#cuentas">Accounts</FooterLink>
          <FooterLink href="/#tarjetas">Cards</FooterLink>
          <FooterLink href="/#inversiones">Investments</FooterLink>
          <FooterLink href="/#seguros">Insurance</FooterLink>
        </Column>
        
        <Column>
          <ColumnTitle>Company</ColumnTitle>
          <FooterLink href="/#nosotros">About Us</FooterLink>
          <FooterLink href="/#equipo">Team</FooterLink>
          <FooterLink href="/#carreras">Careers</FooterLink>
          <FooterLink href="/#blog">Blog</FooterLink>
        </Column>
        
        <Column>
          <ColumnTitle>Support</ColumnTitle>
          <FooterLink href="/#contacto">Contact</FooterLink>
          <FooterLink href="/#ayuda">Help Center</FooterLink>
          <FooterLink href="/#preguntas">FAQ</FooterLink>
          <FooterLink href="/#sucursales">Branches</FooterLink>
        </Column>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          &copy; {currentYear} FinTech Solutions. All rights reserved.
        </Copyright>
        
        <LegalLinks>
          <LegalLink href="/terminos">Terms</LegalLink>
          <LegalLink href="/privacidad">Privacy</LegalLink>
          <LegalLink href="/cookies">Cookies</LegalLink>
        </LegalLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 