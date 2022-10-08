import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IData,
  IMovie,
  IResponseMovies,
  IResponseOneMovie,
} from "../../types/types";

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
    getGenres: builder.query<
      IData,
      {
        genre: string;
        page: number;
        sort_by: string;
        query_term: string;
        order_by: string;
      }
    >({
      query: ({ genre, page, sort_by, query_term, order_by }) => ({
        url: `list_movies.json`,
        params: {
          page,
          genre,
          sort_by,
          order_by,
          query_term,
        },
      }),
      transformResponse: (response: IResponseMovies) => {
        return response.data;
      },
    }),
    getOneMovie: builder.query<IMovie, { movie_id: number }>({
      query: ({ movie_id }) => ({
        url: `movie_details.json`,
        params: {
          movie_id,
        },
      }),
      transformResponse: (response: IResponseOneMovie) => {
        return response.data.movie;
      },
    }),
  }),
});

export const { useLazyGetGenresQuery, useLazyGetOneMovieQuery } = moviesApi;
