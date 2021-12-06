import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';
import userSlice from './slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    counter: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
