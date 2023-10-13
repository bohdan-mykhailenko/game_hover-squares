import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Typography } from '@mui/material';
import { PlayField } from './components/PlayField';

function App() {
  return (
    <Grid>
      <Typography variant="h1">Game</Typography>

      <PlayField />
    </Grid>
  );
}

export default App;
