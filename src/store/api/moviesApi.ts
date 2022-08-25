import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  DiscoverMovie,
  DiscoverTv,
  ResponseDiscover,
  ResponseGenre,
} from "../../types/types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<ResponseDiscover<DiscoverMovie>, unknown>({
      query: () => ({
        url: `discover/movie`,
      }),
    }),
    getTv: builder.query<ResponseDiscover<DiscoverTv>, unknown>({
      query: () => ({
        url: `discover/tv`,
      }),
    }),
    getGenres: builder.query<{ genres: ResponseGenre[] }, unknown>({
      query: () => ({
        url: `genre/movie/list`,
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery, useGetTvQuery } =
  moviesApi;
