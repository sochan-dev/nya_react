import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import loadingStatusReducer from './slices/loadingStatusSlice';

export const store = configureStore({
  reducer: {
    loadingStatus: loadingStatusReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
