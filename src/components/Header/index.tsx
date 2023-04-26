import { Link } from "react-router-dom";
import NavigationList from "../NavigationList";
import styles from "./index.module.scss";
import { ReactComponent as CartIcon } from "./icon-cart.svg";
import { ReactComponent as Logo } from "./logo.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <nav className={styles.header__nav}>
          <Link to="home">
            <Logo className={styles.header__logo} />
          </Link>
          <NavigationList />
        </nav>
        <button className={styles.header__cart}>
          <CartIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
