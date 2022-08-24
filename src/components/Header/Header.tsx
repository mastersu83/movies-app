import React, { FC } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";
import ring from "../../assets/ring.png";
import follow from "../../assets/follow.png";

interface HeaderPropsTypes {
  props: any;
}

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="" className={classes.header__logo}>
        <img src={logo} alt="" />
        <p className={classes.header__logoText}>box</p>
      </a>
      <div className={classes.header__menu}>
        <a href="#" className={classes.header__menu_link}>
          Home
        </a>
        <a href="#" className={classes.header__menu_link}>
          TV Shows
        </a>
        <a href="#" className={classes.header__menu_link}>
          Movies
        </a>
        <a href="#" className={classes.header__menu_link}>
          Series
        </a>
      </div>
      <div className={classes.header__group}>
        <a href="">
          <img src={search} alt="" className="header__group_icon" />
        </a>
        <a href="">
          <img src={ring} alt="" className="header__group_icon" />
        </a>
        <a href="">
          <img src={follow} alt="" className="header__group_icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
