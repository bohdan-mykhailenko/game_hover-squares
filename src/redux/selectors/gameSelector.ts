import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectedModeSelector = (state: RootState) => state.game.selectedMode;

export const selectMode = createSelector(
  [selectedModeSelector],
  (selectedMode) => selectedMode,
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

const hoveredSquaresSelector = (state: RootState) => state.game.hoveredSquares;

export const selectHoveredSquares = createSelector(
  [hoveredSquaresSelector],
  (hoveredSquares) => hoveredSquares,
);
