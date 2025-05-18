import { createGlobalStyle, DefaultTheme } from 'styled-components';

// Определяем глобальную тему для styled-components
export const theme: DefaultTheme = {
  colors: {
    primary: '#1890ff',
    secondary: '#52c41a',
    background: '#f5f5f5',
    text: '#333333',
    error: '#ff4d4f',
    success: '#52c41a',
    warning: '#faad14'
  },
  fontSizes: {
    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '20px'
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px'
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '1200px'
  }
};

// Глобальные стили для всего приложения
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
    font-size: 14px;
    line-height: 1.5;
    color: ${({ theme }) => theme?.colors?.text || '#333333'};
    background-color: ${({ theme }) => theme?.colors?.background || '#f5f5f5'};
  }

  a {
    color: ${({ theme }) => theme?.colors?.primary || '#1890ff'};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme }) => theme?.spacing?.medium || '16px'};
    font-weight: 500;
  }

  p {
    margin-bottom: ${({ theme }) => theme?.spacing?.medium || '16px'};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Стили для форм */
  input, button, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /* Стили для кнопок */
  button {
    cursor: pointer;
  }

  /* Утилитарные классы */
  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .mt-1 {
    margin-top: ${({ theme }) => theme?.spacing?.small || '8px'};
  }

  .mt-2 {
    margin-top: ${({ theme }) => theme?.spacing?.medium || '16px'};
  }

  .mt-3 {
    margin-top: ${({ theme }) => theme?.spacing?.large || '24px'};
  }

  .mb-1 {
    margin-bottom: ${({ theme }) => theme?.spacing?.small || '8px'};
  }

  .mb-2 {
    margin-bottom: ${({ theme }) => theme?.spacing?.medium || '16px'};
  }

  .mb-3 {
    margin-bottom: ${({ theme }) => theme?.spacing?.large || '24px'};
  }
  
  /* Стили для адаптивности */
  @media (max-width: ${({ theme }) => theme?.breakpoints?.mobile || '576px'}) {
    html {
      font-size: 12px;
    }
  }
`;