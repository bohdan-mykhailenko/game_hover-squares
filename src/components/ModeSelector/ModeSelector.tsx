import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getModes } from '../../api/fieldsize';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Mode } from '../../types/Mode';
import { useTypedDispatch, useTypedSelector } from '../../redux/hooks';
import { selectMode } from '../../redux/selectors/gameSelector';
import { setSelectedMode } from '../../redux/features/gameSlice';

export const ModeSelector: React.FC = () => {
  const dispatch = useTypedDispatch();
  const [hasFetchedMessages, setHasFetchedMessages] = useState(false);
  const selectedMode = useTypedSelector(selectMode);

  const {
    data: modesFromServer,
    error,
    isLoading,
  } = useQuery('modes', getModes, {
    enabled: !hasFetchedMessages,
    onSuccess: (data) => {
      setModes(data);
      setHasFetchedMessages(true);
    },
  });

  const [modes, setModes] = useState<Mode[]>([]);

  const handleModeChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    const selectedMode =
      modes.find((mode) => mode.name === selectedValue) || null;

    dispatch(setSelectedMode(selectedMode));
  };

  return (
    <FormControl sx={{ width: '350px' }}>
      <InputLabel id="select-label">Pick mode</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedMode?.name || ''}
        label="Pick mode"
        sx={{ height: '50px' }}
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
