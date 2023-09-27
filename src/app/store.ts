import { configureStore } from '@reduxjs/toolkit';
import { quizApi } from '~/api/api';
import { counterSlice } from '~/features/counter/counterSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { homescreenSlice } from '~/components/HomeScreen/homescreenSlice';

export const store = configureStore({
  reducer: {
    [counterSlice.name]: counterSlice.reducer,
    [homescreenSlice.name]: homescreenSlice.reducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(quizApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
