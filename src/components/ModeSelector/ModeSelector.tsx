import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getModes } from '../../api/gameModes';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from '@mui/material';
import { Mode } from '../../types/Mode';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { selectMode } from '../../redux/selectors/gameSelector';
import {
  resetHoveredSquares,
  setIsGameStarted,
  setSelectedMode,
} from '../../redux/features/gameSlice';
import {
  setAlertMessage,
  setIsAlertOppened,
} from '../../redux/features/alertSlice';

export const ModeSelector: React.FC = () => {
  const theme = useTheme();
  const dispatch = useTypedDispatch();
  const [hasFetchedMessages, setHasFetchedMessages] = useState(false);
  const selectedMode = useTypedSelector(selectMode);

  const { data: modesFromServer } = useQuery('modes', getModes, {
    enabled: !hasFetchedMessages,
    onSuccess: () => {
      setHasFetchedMessages(true);
    },
    onError: () => {
      const alertMessage = {
        title: 'Error',
        text: 'Error occured when fetching data from the server!',
        severity: 'error',
      };

      dispatch(setIsAlertOppened(true));
      dispatch(setAlertMessage(alertMessage));
    },
  });

  const handleModeChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    const selectedMode =
      modesFromServer?.find((mode) => mode.name === selectedValue) || null;

    dispatch(setIsGameStarted(false));
    dispatch(setSelectedMode(selectedMode));
    dispatch(resetHoveredSquares());
  };

  return (
    <FormControl
      sx={{
        marginRight: '30px',
        width: '320px',

        [theme.breakpoints.down('sm')]: {
          width: '200px',
        },

        [theme.breakpoints.down('xs')]: {
          height: '35px',
          width: '150px',
        },
      }}
    >
      <InputLabel id="select-label">Pick mode</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedMode?.name || ''}
        label="Pick mode"
        sx={{
          height: '50px',
          [theme.breakpoints.down('xs')]: {
            height: '35px',
          },
        }}
        onChange={handleModeChange}
      >
        {modesFromServer?.map((mode) => (
          <MenuItem key={mode.id} value={mode.name}>
            {mode.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
