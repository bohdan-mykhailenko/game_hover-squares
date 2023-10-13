import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getModes } from '../../api/fieldsize';
import {
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { Mode } from '../../types/Mode';
import { useTypedDispatch } from '../../redux/hooks';
import { setFieldSize } from '../../redux/features/gameSlice';

const ModeSelector: React.FC = () => {
  const dispatch = useTypedDispatch();
  const [hasFetchedMessages, setHasFetchedMessages] = useState(false);

  const {
    data: modesFromServer,
    error,
    isLoading,
  } = useQuery('modes', getModes, {
    enabled: !hasFetchedMessages,
    onSuccess: (data) => {
      const initialMode = data[0].name;
      const initialFieldSize = data[0].field;

      dispatch(setFieldSize(initialFieldSize));

      setSelectedMode(initialMode);
      setModes(data);
      setHasFetchedMessages(true);
    },
  });

  const [selectedMode, setSelectedMode] = useState<string>('');
  const [modes, setModes] = useState<Mode[]>([]);

  const handleModeChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value;
    const selectedFieldSize =
      modes.find((mode) => mode.name === selectedMode)?.field || 0;

    setSelectedMode(selectedValue);

    dispatch(setFieldSize(selectedFieldSize));
  };

  return (
    <Grid>
      <InputLabel id="select">Game Mode</InputLabel>
      <Select
        labelId="select"
        id="demo-simple-select-standard"
        value={selectedMode}
        onChange={handleModeChange}
        label="Age"
      >
        {modesFromServer?.map((mode) => (
          <MenuItem key={mode.id} value={mode.name}>
            {mode.name}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default ModeSelector;
