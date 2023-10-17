import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './features/gameSlice';
import alertReducer from './features/alertSlice';

const store = configureStore({
  reducer: {
    game: gameReducer,
    alert: alertReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
