import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};
export default Header;
