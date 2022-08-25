import React, { FC } from "react";
import classes from "./SubHeader.module.scss";
import rating from "../../assets/Rating.png";
import play from "../../assets/play.png";

interface SubHeaderPropsTypes {
  props: any;
}

const SubHeader: FC<SubHeaderPropsTypes> = (props) => {
  return (
    <div className={classes.subheader}>
      <span className={classes.subheader__title}>Night Watch</span>
      <div className={classes.subheader__info}>
        <a href="" className={classes.subheader__info_link}>
          <p>2021</p>
        </a>
        <a href="" className={classes.subheader__info_link}>
          <p>18+</p>
        </a>
        <a href="" className={classes.subheader__info_link}>
          <p>9 Seasons</p>
        </a>
        <a href="" className={classes.subheader__info_link}>
          <img src={rating} alt="" />
        </a>
        <a href="" className={classes.subheader__info_link}>
          <p>8.8</p>
        </a>
      </div>
      <p className={classes.subheader__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis et
        elit lacinia urna.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.
      </p>
      <div className={classes.subheader__button}>
        <button className={classes.subheader__buttonWatch}>
          <img src={play} alt="" />
          Watch
        </button>
        <button className={classes.subheader__buttonWatch}>
          More information
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
