import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const NavigationList = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="/home">HOME</NavLink>
      </li>
      <li>
        <NavLink to="/category/headphones">HEADPHONES</NavLink>
      </li>
      <li>
        <NavLink to="/category/speakers">SPEAKERS</NavLink>
      </li>
      <li>
        <NavLink to="/category/earphones">EARPHONES</NavLink>
      </li>
    </ul>
  );
};

export default NavigationList;
