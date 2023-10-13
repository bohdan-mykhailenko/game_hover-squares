import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const fieldSizeSelector = (state: RootState) => state.game.fieldSize;

export const selectFieldSize = createSelector(
  [fieldSizeSelector],
  (fieldSize) => fieldSize,
);

const isGameStartedSelector = (state: RootState) => state.game.isGameStarted;

export const selectIsGameStarted = createSelector(
  [isGameStartedSelector],
  (isGameStarted) => isGameStarted,
);
const isGameEndedSelector = (state: RootState) => state.game.isGameEnded;

export const selectIsGameEnded = createSelector(
  [isGameEndedSelector],
  (isGameEnded) => isGameEnded,
);
