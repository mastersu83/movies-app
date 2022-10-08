import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./api/moviesApi";
import moviesSlice from "./slices/moviesSlice";

export const store = configureStore({
  reducer: {
    movie: moviesSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
