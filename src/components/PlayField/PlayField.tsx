import { List } from '@mui/material';
import React from 'react';
import { Square } from '../Square';
import { useTypedSelector } from '../../redux/hooks';
import { selectFieldSize } from '../../redux/selectors/gameSelector';

export const PlayField: React.FC = () => {
  const fieldSize = useTypedSelector(selectFieldSize);
  const squaresCount = fieldSize * fieldSize;

  return (
    <List
      sx={{
        width: '500px',
        display: 'grid',
        gridTemplateColumns: (theme) => `repeat(${fieldSize}, 1fr)`,
        gap: '1px',
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
