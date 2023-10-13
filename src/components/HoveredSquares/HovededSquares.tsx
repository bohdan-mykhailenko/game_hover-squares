import React from 'react';
import { useTypedSelector } from '../../redux/hooks';
import { selectHoveredSquares } from '../../redux/selectors/gameSelector';
import { Grid, List, Typography } from '@mui/material';

export const HovededSquares: React.FC = () => {
  const hoveredSquares = useTypedSelector(selectHoveredSquares);

  return (
    <Grid>
      <Typography variant="h2">hovered</Typography>

      <List>
        {hoveredSquares.map((square) => (
          <Typography
            key={square.id}
            variant="h4"
          >{`row ${square.row} col ${square.column} `}</Typography>
        ))}
      </List>
    </Grid>
  );
};
