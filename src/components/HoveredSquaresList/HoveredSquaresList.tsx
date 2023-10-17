import React from 'react';
import { useTypedSelector } from '../../redux/hooks';
import { selectHoveredSquares } from '../../redux/selectors/gameSelector';
import { Grid, List, Typography, useTheme } from '@mui/material';
import { HoveredSquareItem } from '../HoveredSquareItem';

export const HoveredSquaresList: React.FC = () => {
  const theme = useTheme();
  const hoveredSquares = useTypedSelector(selectHoveredSquares);

  return (
    <Grid
      container
      direction="column"
      sx={{
        width: '200%',

        [theme.breakpoints.down('lg')]: {
          width: '100%',
        },
      }}
    >
      <Typography variant="h1">Hovered Squares</Typography>

      <List
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: '5px',

          [theme.breakpoints.down('lg')]: {
            gridTemplateColumns: '1fr',
          },
        }}
      >
        {hoveredSquares.map((square) => (
          <HoveredSquareItem
            key={square.id}
            row={square.row}
            column={square.column}
          />
        ))}
      </List>
    </Grid>
  );
};
