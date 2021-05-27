import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import loadingStatusReducer from './slices/loadingStatusSlice'
import authStatusReducer from './slices/AuthStatusSlice'
export const store = configureStore({
  reducer: {
    loadingStatus: loadingStatusReducer,
    authStatus: authStatusReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
