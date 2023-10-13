import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Square } from '../../types/Square';

interface gameState {
  fieldSize: number;
  isGameStarted: boolean;
  isGameEnded: boolean;
  hoveredSquares: Square[];
}

const initialState: gameState = {
  fieldSize: 10,
  isGameStarted: false,
  isGameEnded: false,
  hoveredSquares: [],
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

    hoverSquare: (state, action: PayloadAction<Square>) => {
      state.hoveredSquares.push(action.payload);
    },

    unhoverSquare: (state, action: PayloadAction<number>) => {
      state.hoveredSquares = state.hoveredSquares.filter(
        (square) => square.id !== action.payload,
      );
    },
  },
});

export const {
  setFieldSize,
  setIsGameStarted,
  setIsGameEnded,
  hoverSquare,
  unhoverSquare,
} = messagesSlice.actions;

export default messagesSlice.reducer;
