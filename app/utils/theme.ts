// app/utils/theme.ts
export const theme = {
  colors: {
    primary: '#0052CC',
    secondary: '#00875A',     
    accent: '#FF5630',        
    neutral: {
      100: '#FFFFFF',
      200: '#F4F5F7',
      300: '#DFE1E6',
      400: '#B3BAC5',
      500: '#6B778C',
      600: '#505F79',
      700: '#344563',
      800: '#172B4D',
      900: '#091E42'
    },
    success: '#36B37E',
    warning: '#FFAB00',
    error: '#FF5630',
    info: '#00B8D9',
    background: {
      light: '#FFFFFF',
      dark: '#F4F5F7',
      card: '#FFFFFF'
    }
  },
  typography: {
    fontFamily: {
      sans: 'var(--font-geist-sans), system-ui, sans-serif',
      mono: 'var(--font-geist-mono), monospace'
    },
    fontSize: {
      xs: '0.75rem',     // 12px
      sm: '0.875rem',    // 14px
      md: '1rem',        // 16px
      lg: '1.125rem',    // 18px
      xl: '1.25rem',     // 20px
      '2xl': '1.5rem',   // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem'      // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75
    }
  },
  spacing: {
    xs: '0.25rem',     // 4px
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px
    lg: '1.5rem',      // 24px
    xl: '2rem',        // 32px
    '2xl': '2.5rem',   // 40px
    '3xl': '3rem'      // 48px
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',    // 2px
    md: '0.25rem',     // 4px
    lg: '0.5rem',      // 8px
    xl: '1rem',        // 16px
    full: '9999px'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out'
  }
}; 