import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavigationList from "../NavigationList";
import styles from "./index.module.scss";
import { ReactComponent as CartIcon } from "./icon-cart.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as Hamburger } from "./icon-hamburger.svg";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.header__backdrop}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>
      <div className={styles.header__wrapper}>
        <button
          className={`${styles.header__button} ${styles["header__button--hamburger"]}`}
          onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          <Hamburger />
        </button>
        <Link to="home" className={styles.header__logo}>
          <Logo />
        </Link>
        <nav
          className={`${styles.nav} ${isMenuOpen ? styles["nav--open"] : ""}`}
        >
          <div className={styles.nav__list}>
            <NavigationList />
          </div>
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
