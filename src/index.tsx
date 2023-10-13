import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreProvider } from './redux/provider';
import { ThemeProvider } from './providers/ThemeProvider';
import { QueryProvider } from './providers/QueryProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <StoreProvider>
      <QueryProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryProvider>
    </StoreProvider>
  </React.StrictMode>,
);
