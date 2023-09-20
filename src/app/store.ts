import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '~/features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
