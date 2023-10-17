import React from 'react';
import { Grid, useTheme } from '@mui/material';
import { PlayField } from './components/PlayField';
import { ModeSelector } from './components/ModeSelector';
import { HoveredSquaresList } from './components/HoveredSquaresList';
import { GameControllerButton } from './components/GameControllerButton';
import { Alerts } from './components/Alerts';
import { useTypedSelector } from './redux/hooks';
import { selectIsAlertOpenned } from './redux/selectors/alertSelector';

function App() {
  const theme = useTheme();
  const isAlertOpenned = useTypedSelector(selectIsAlertOpenned);

  return (
    <Grid
      sx={{
        padding: '30px',
        gap: '50px',

        [theme.breakpoints.down('sm')]: {
          padding: '10px',
          gap: '30px',
        },

        [theme.breakpoints.down('xs')]: {
          padding: '20px 0 0 0',
          gap: '15px',
        },
      }}
      container
    >
      <Grid
        sx={{
          [theme.breakpoints.down('md')]: {
            margin: '0 auto',
          },
        }}
      >
        <Grid
          sx={{
            marginBottom: '50px',

            [theme.breakpoints.down('sm')]: {
              marginBottom: '30px',
              textAlign: 'center',
            },
          }}
        >
          <ModeSelector />

          <GameControllerButton />
        </Grid>

        <PlayField />
      </Grid>

      <Grid
        sx={{
          [theme.breakpoints.down('md')]: {
            margin: '0 auto',
          },
        }}
      >
        <HoveredSquaresList />
      </Grid>

      {isAlertOpenned && <Alerts />}
    </Grid>
  );
}

export default App;
