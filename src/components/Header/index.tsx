import { Link } from "react-router-dom";
import NavigationList from "../NavigationList";
import styles from "./index.module.scss";
import { ReactComponent as CartIcon } from "./icon-cart.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Hamburger } from "./icon-hamburger.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <button
          className={`${styles.header__button} ${styles["header__button--hamburger"]}`}
        >
          <Hamburger />
        </button>
        <Link to="home" className={styles.header__logo}>
          <Logo />
        </Link>
        <nav className={styles.header__nav}>
          <NavigationList />
        </nav>
        <button
          className={`${styles.header__button} ${styles["header__button--cart"]}`}
        >
          <CartIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
