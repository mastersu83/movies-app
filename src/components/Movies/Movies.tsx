import React, { FC } from "react";
import classes from "./Movies.module.scss";
import { IMovie } from "../../types/types";
import { ShowsTitle } from "../ShowsTitle/ShowsTitle";

interface MoviesPropsTypes {
  movies: IMovie[];
}

export const Movies: FC<MoviesPropsTypes> = ({ movies }) => {
  return (
    <>
      <ShowsTitle title="Movies" />
      <div className={classes.movies}>
        {movies &&
          movies.map((card) => (
            <div key={card.id} className={`${classes.movies__gridItem}`}>
              <img
                onClick={() => console.log(card.id)}
                className={classes.movies__img}
                src={card.large_cover_image}
                alt=""
              />
              <span>{card.title}</span>
            </div>
          ))}
      </div>
    </>
  );
};
