import React, { useCallback, useEffect, useState } from "react";
import { api } from "./api";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <>
      <nav className={styles.navbar}>
        <i className="fab fa-youtube"></i>
        <span>Youtube</span>
        <input type="text" placeholder="Search.." />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
