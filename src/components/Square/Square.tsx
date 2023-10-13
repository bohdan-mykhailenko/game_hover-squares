import { Box, Grid, useTheme } from '@mui/material';
import React from 'react';

interface SquareProps {
  square: number;
  row: number;
  column: number;
  fieldSize: number;
}

export const Square: React.FC<SquareProps> = ({ row, column, fieldSize }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    />
  );
};
