import { Typography, ListItem, useTheme } from '@mui/material';
import React from 'react';

interface HoveredSquareItemProps {
  row: number;
  column: number;
}

export const HoveredSquareItem: React.FC<HoveredSquareItemProps> = ({
  row,
  column,
}) => {
  const theme = useTheme();

  return (
    <ListItem
      sx={{
        padding: 0,
        marginBottom: '5px',
        display: 'block',
        textAlign: 'left',
      }}
    >
      <Typography
        sx={{
          padding: '10px 15px',
          borderRadius: '5px',
          display: 'block',
          color: theme.palette.warning.dark,
          backgroundColor: theme.palette.warning.light,
        }}
        variant="h4"
      >{`row ${row} col ${column} `}</Typography>
    </ListItem>
  );
};
