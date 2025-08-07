import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* GT Walsheim Trial font-face (replace with actual font if available) */
  @font-face {
    font-family: 'GT Walsheim Trial';
    src: local('GT Walsheim Trial'), local('GTWalsheimTrial'),
         url('/fonts/GTWalsheimTrial-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style:normal;
    font-display: swap;
  }

  :root {
    --primary-green: #0D4036;
    --accent-orange: #F26A2E;
    --accent-yellow: #EFC75E;
    --accent-teal: #A7C7C7;
    --accent-pattern: #F6F3F0;
    --text-dark: #0D4036;
    --text-light: #FFFFFF;
    --shadow: 0 4px 24px rgba(13, 64, 54, 0.08);
    --radius: 18px;
    --transition: 0.3s cubic-bezier(0.4,0,0.2,1);
  }

  *, *::before, *::after {
    box-sizing: border-box;
     font-family: 'GT Walsheim Trial',
  }

  html {
    box-sizing: border-box;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
  }

  body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'GT Walsheim Trial', 'Inter', Arial, sans-serif;
    background: #F6F3F0;
    color: var(--text-dark);
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.01em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
     font-family: 'GT Walsheim Trial';
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }


`;