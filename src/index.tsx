import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ParallaxProvider } from 'react-scroll-parallax';
import { theme } from './theme';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ParallaxProvider scrollAxis='horizontal'>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ParallaxProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
