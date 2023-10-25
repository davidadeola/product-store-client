import React from "react";
import Header from "./header/header";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles["layout__container"]}>
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
