import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectedModeSelector = (state: RootState) => state.game.selectedMode;
const isGameStartedSelector = (state: RootState) => state.game.isGameStarted;
const isGameEndedSelector = (state: RootState) => state.game.isGameEnded;
const hoveredSquaresSelector = (state: RootState) => state.game.hoveredSquares;

export const selectMode = createSelector(
  [selectedModeSelector],
  (selectedMode) => selectedMode,
);

export const selectIsGameStarted = createSelector(
  [isGameStartedSelector],
  (isGameStarted) => isGameStarted,
);

export const selectIsGameEnded = createSelector(
  [isGameEndedSelector],
  (isGameEnded) => isGameEnded,
);

export const selectHoveredSquares = createSelector(
  [hoveredSquaresSelector],
  (hoveredSquares) => hoveredSquares,
);
