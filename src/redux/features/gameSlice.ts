import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface gameState {
  fieldSize: number;
  isGameStarted: boolean;
  isGameEnded: boolean;
}

const initialState: gameState = {
  fieldSize: 10,
  isGameStarted: false,
  isGameEnded: false,
};

const messagesSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setFieldSize: (state, action: PayloadAction<number>) => {
      state.fieldSize = action.payload;
    },

    setIsGameStarted: (state, action: PayloadAction<boolean>) => {
      state.isGameStarted = action.payload;
    },

    setIsGameEnded: (state, action: PayloadAction<boolean>) => {
      state.isGameEnded = action.payload;
    },
  },
});

export const { setFieldSize, setIsGameStarted, setIsGameEnded } =
  messagesSlice.actions;

export default messagesSlice.reducer;
