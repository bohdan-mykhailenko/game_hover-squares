import { Grid } from '@mui/material';
import React from 'react';

interface SquareProps {
  square: number;
  row: number;
  column: number;
  fieldSize: number;
}

export const Square: React.FC<SquareProps> = ({
  square,
  row,
  column,
  fieldSize,
}) => {
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
        width: `calc(100% / ${fieldSize})`,
        height: `calc(100% / ${fieldSize})`,
        fontSize: '10px',
      }}
    >{`(Row: ${row}, Column: ${column})`}</Grid>
  );
};
