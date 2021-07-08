import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,
  
    colors: {
      background: string,
      details: string,
      color: string,
      color_80: string,
      color_50: string,
      color_15: string,
    }
  }
}