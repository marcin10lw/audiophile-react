import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const ListElement = ({ path, title }: { path: string; title: string }) => (
  <li>
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles.navlink} ${styles["navlink--active"]}`
          : styles.navlink
      }
    >
      {title.toLocaleUpperCase()}
    </NavLink>
  </li>
);

const NavigationList = () => {
  return (
    <ul className={styles.list}>
      <ListElement path="/home" title="home" />
      <ListElement path="/category/headphones" title="headphones" />
      <ListElement path="/category/speakers" title="speakers" />
      <ListElement path="/category/earphones" title="earphones" />
    </ul>
  );
};

export default NavigationList;
