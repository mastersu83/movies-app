import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../types/types";

export interface InitialStateType {
  movie: IMovie;
  movies: IMovie[];
}

const initialState: InitialStateType = {
  movie: {} as IMovie,
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setOneMovie: (state: InitialStateType, action: PayloadAction<IMovie>) => {
      console.log(action.payload);
      state.movie = action.payload;
    },
    setMovies: (state: InitialStateType, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload;
    },
  },
});

export const { setOneMovie, setMovies } = moviesSlice.actions;

export default moviesSlice;
