import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationList from "../NavigationList";
import styles from "./index.module.scss";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as Logo } from "./images/logo.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { useState } from "react";
import CathegoryLinks from "../CathegoryLinks";
import { menuVariants } from "./variants";
import Backdrop from "../Backdrop";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Backdrop onClick={() => setIsMenuOpen(false)} isMenuOpen={isMenuOpen} />
      <header
        className={`${styles.header} ${
          pathname === "/home" ? styles["header--home"] : ""
        }`}
      >
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
            className={styles.nav}
            style={{
              pointerEvents: isMenuOpen ? "auto" : "none",
            }}
          >
            <div className={styles.nav__list}>
              <NavigationList />
            </div>

            <motion.div
              initial={false}
              variants={menuVariants}
              style={{
                pointerEvents: isMenuOpen ? "auto" : "none",
              }}
              animate={isMenuOpen ? "open" : "closed"}
              className={styles.nav__cathegories}
            >
              <CathegoryLinks />
            </motion.div>
          </nav>

          <button
            className={`${styles.header__button} ${styles["header__button--cart"]}`}
          >
            <CartIcon />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
