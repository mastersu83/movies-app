import React, { FC } from "react";
import classes from "./ShowsTitle.module.scss";

interface ShowsTitlePropsTypes {
  title: string;
}

export const ShowsTitle: FC<ShowsTitlePropsTypes> = ({ title }) => {
  return (
    <div className={classes.title}>
      <div className={classes.title__rectangle} />
      <h2 className={classes.title__text}>{title}</h2>
    </div>
  );
};
