import React from "react";
import { Link } from "react-router-dom";
import IHeaderProps from "./Header.type";
import styles from "./Header.module.scss";
import Button from "../button/button";
const Header = (props: IHeaderProps) => {
  return (
    <header className={styles.Header}>
      <div className="container">
      <nav>
        <div className={styles.nav_box}>
        <Link to={"register"}>Register</Link>
        </div>
        <div className={styles.nav_box}>
       
        <Link to={"Home"}>Home</Link>
        <Link to={"/products"}>Products</Link>
       
       
        </div>
        
        <div className={styles.nav_box}>
        <Link to={"auth/login"}>Login</Link>
        
        </div>
      </nav>
      </div>
    </header>
  );
};
export default Header;
