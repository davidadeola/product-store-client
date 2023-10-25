import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={style["header__container"]}>
      <a href="/">Mern Shop</a>
    </header>
  );
};

export default Header;
