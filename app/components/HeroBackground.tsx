'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 82, 204, 0.3) 0%,
    rgba(0, 82, 204, 0.2) 100%
  );
  z-index: 1;
  pointer-events: none;
`;

interface HeroBackgroundProps {
  className?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ className }) => {
  return (
    <BackgroundContainer className={className}>
      <ImageContainer>
        <Image
          src="/images/background-app.jpg"
          alt="Paisaje financiero"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
        />
        <Overlay />
      </ImageContainer>
    </BackgroundContainer>
  );
};

export default HeroBackground; 