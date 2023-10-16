import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Typography } from '@mui/material';
import { PlayField } from './components/PlayField';
import { HovededSquares } from './components/HoveredSquares';
import { ModeSelector } from './components/ModeSelector';

function App() {
  return (
    <Grid>
      <Typography variant="h1">Game</Typography>

      <ModeSelector />

      <Grid container>
        <PlayField />

        <HovededSquares />
      </Grid>
    </Grid>
  );
}

export default App;
