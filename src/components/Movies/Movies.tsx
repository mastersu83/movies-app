import React, { FC } from "react";
import classes from "./Movies.module.scss";
import { IMovie } from "../../types/types";
import { ShowsTitle } from "../ShowsTitle/ShowsTitle";
import { Link } from "react-router-dom";
import { useLazyGetOneMovieQuery } from "../../store/api/moviesApi";
import { useAppDispatch } from "../../hooks/appHooks";
import { setOneMovie } from "../../store/slices/moviesSlice";

interface MoviesPropsTypes {
  movies: IMovie[];
}

export const Movies: FC<MoviesPropsTypes> = ({ movies }) => {
  const dispatch = useAppDispatch();
  const [oneMovies] = useLazyGetOneMovieQuery();

  const getOneMovie = async (movie_id: number) => {
    const { data } = await oneMovies({ movie_id });
    dispatch(setOneMovie(data ? data : ({} as IMovie)));
  };

  return (
    <>
      <ShowsTitle title="Movies" />
      <div className={classes.movies}>
        {movies &&
          movies.map((card) => (
            <div
              key={card.id}
              onClick={() => getOneMovie(card.id)}
              className={`${classes.movies__gridItem}`}
            >
              <Link to={`/movies/${card.id}/${card.url.split("/").slice(-1)}`}>
                <img
                  className={classes.movies__img}
                  src={card.large_cover_image}
                  alt=""
                />
                <div className={classes.movies__hoverTitleBox}>
                  <span className={classes.movies__hoverTitle}>
                    {card.title}
                  </span>
                </div>
              </Link>
              <span className={classes.movies__title}>{card.title}</span>
            </div>
          ))}
      </div>
    </>
  );
};
