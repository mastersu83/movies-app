import React from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/logo.png";
import search from "../../assets/search.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="/" className={classes.header__logo}>
        <img src={logo} alt="" />
        <p className={classes.header__logoText}>box</p>
      </a>
      <div className={classes.header__group}>
        <img src={search} alt="" className="header__group_icon" />
      </div>
    </header>
  );
};

export default Header;
