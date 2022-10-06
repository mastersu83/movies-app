import React, { FC, useState } from "react";
import classes from "./Category.module.scss";
import { genres } from "../../constants/constants";
import { ShowsTitle } from "../ShowsTitle/ShowsTitle";

interface CategoryPropsTypes {
  handleGetGenres: (genre: string) => void;
}

export const Category: FC<CategoryPropsTypes> = ({ handleGetGenres }) => {
  const [active, setActive] = useState<number>(0);

  const handleGenres = (genre: string, index: number) => {
    handleGetGenres(genre === "All movies" ? "" : genre);
    setActive(index);
  };

  return (
    <>
      <ShowsTitle title="Popular Genres" />
      <div className={`${classes.category}`}>
        {genres.map((genre, index) => (
          <button
            key={genre}
            onClick={() => handleGenres(genre, index)}
            className={`${
              active === index ? classes.category__buttonActive : ""
            } ${classes.category__button}`}
          >
            {genre}
          </button>
        ))}
      </div>
    </>
  );
};
