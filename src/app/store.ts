import { configureStore } from '@reduxjs/toolkit';
import { quizApi } from '~/api/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { homescreenSlice } from '~/store/homescreenSlice';

export const store = configureStore({
  reducer: {
    [homescreenSlice.name]: homescreenSlice.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
