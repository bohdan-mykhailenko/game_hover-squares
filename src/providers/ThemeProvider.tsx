import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import React from 'react';
import { theme } from '../theme/theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);
