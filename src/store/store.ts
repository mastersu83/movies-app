import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./api/moviesApi";

export const store = configureStore({
  reducer: {
    // auth: authSlice.reducer,
    // post: postsSlice.reducer,
    // comment: commentsSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    // [commentsApi.reducerPath]: commentsApi.reducer,
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      moviesApi.middleware
      // commentsApi.middleware,
      // authApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
