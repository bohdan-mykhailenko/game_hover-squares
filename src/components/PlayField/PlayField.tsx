import { List, useTheme } from '@mui/material';
import React from 'react';
import { Square } from '../Square';
import { useTypedSelector } from '../../redux/hooks';
import { selectFieldSize } from '../../redux/selectors/gameSelector';

export const PlayField: React.FC = () => {
  const theme = useTheme();
  const fieldSize = useTypedSelector(selectFieldSize);
  const squaresCount = fieldSize * fieldSize;

  return (
    <List
      sx={{
        padding: '0',
        height: '500px',
        width: '500px',
        display: 'grid',
        gridTemplateColumns: (theme) => `repeat(${fieldSize}, 1fr)`,
        border: `1px solid ${theme.palette.secondary.main}`,
      }}
    >
      {Array.from({ length: squaresCount }, (_, index) => {
        const row = Math.floor(index / fieldSize);
        const column = index % fieldSize;

        return (
          <Square
            key={index}
            square={index + 1}
            row={row}
            column={column}
            fieldSize={fieldSize}
          />
        );
      })}
    </List>
  );
};
