import React, { FC } from "react";
import classes from "./Shows.module.scss";
import { DiscoverMovie, DiscoverTv, ResponseGenre } from "../../types/types";
import { IMAGE_PATH } from "../../constants/constants";
import action from "../../assets/genres/action.png";

interface ShowsPropsTypes {
  title: string;
  genresKey?: boolean;
  actors?: boolean;
  movies?: DiscoverMovie[];
  tv?: DiscoverTv[];
  genres?: ResponseGenre[];
}

const Shows: FC<ShowsPropsTypes> = ({
  title,
  genresKey,
  actors,
  movies,
  genres,
  tv,
}) => {
  return (
    <div className={classes.shows}>
      <div className={classes.shows__title}>
        <div className={classes.shows__titleRectangle} />
        <a href="" className={classes.shows__titleText}>
          <h2>{title}</h2>
        </a>
      </div>
      <div
        className={`${genresKey ? classes.genres__grid : classes.shows__grid}`}
      >
        {movies &&
          movies.map((card) => (
            <div key={card.id} className={`${classes.shows__gridItem}`}>
              <img src={`${IMAGE_PATH}${card.backdrop_path}`} alt="" />
              <span>{!actors ? card.title : card.overview}</span>
              <span>{!actors ? card.vote_average : card.overview}</span>
            </div>
          ))}
        {tv &&
          tv.map((card) => (
            <div key={card.id} className={`${classes.shows__gridItem}`}>
              <img src={`${IMAGE_PATH}${card.backdrop_path}`} alt="" />
              <span>{!actors ? card.name : card.overview}</span>
              <span>{!actors ? card.vote_average : card.overview}</span>
            </div>
          ))}
        {genres &&
          genres.map((card) => (
            <div key={card.id} className={`${classes.shows__gridItem}`}>
              <img src={`${action}`} alt="" />
              <span>{card.name}</span>
            </div>
          ))}
      </div>
      <button className={classes.shows__button}>See more</button>
    </div>
  );
};

export default Shows;
