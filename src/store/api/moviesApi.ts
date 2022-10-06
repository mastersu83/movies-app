import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IResponseMovies } from "../../types/types";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://yts.mx/api/v2/",
    // prepareHeaders: (headers) => {
    //   headers.set(
    //     "Authorization",
    //     `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    //   );
    //   return headers;
    // },
  }),

  endpoints: (builder) => ({
    getGenres: builder.query<IResponseMovies, { genre: string; page: number }>({
      query: ({ genre, page }) => ({
        url: `list_movies.json`,
        params: {
          page,
          genre,
        },
      }),
    }),
    getOneMovie: builder.query<IResponseMovies, { movie_id: number }>({
      query: ({ movie_id }) => ({
        url: `movie_details.json`,
        params: {
          movie_id,
        },
      }),
    }),
  }),
});

export const { useLazyGetGenresQuery, useLazyGetOneMovieQuery } = moviesApi;
