import 'styled-components';
import { theme } from './theme';

export type Theme = typeof theme;

// Add theme type to styled-components
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
} 