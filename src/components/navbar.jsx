import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <i></i>
        <span>Youtube</span>
        <input type="text" placeholder="Search.." />
        <button>
          <i>ddd</i>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
