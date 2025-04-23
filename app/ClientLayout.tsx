'use client';

import React from 'react';
import StyledComponentsRegistry from "./lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme";

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  const enhancedTheme = {
    ...theme,
    _brand: 'styled-components-theme' as const
  };

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={enhancedTheme}>
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default ClientLayout; 