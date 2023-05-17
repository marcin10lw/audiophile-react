import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import NavigationList from "../NavigationList";
import styles from "./index.module.scss";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { useState } from "react";
import CategoryLinks from "../CategoryLinks";
import { menuVariants } from "./variants";
import Backdrop from "../Backdrop";
import { useMediaQuery } from "@material-ui/core";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { selectCartProducts } from "../../store/cartSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { pathname } = useLocation();
  const matches = useMediaQuery("(max-width: 940px");
  const cartProducts = useSelector(selectCartProducts);

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Backdrop
        onClick={() => setIsMenuOpen(false)}
        showBackDrop={isMenuOpen}
      />
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
              pointerEvents: isMenuOpen ? "auto" : matches ? "none" : "auto",
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
              className={styles.nav__categories}
            >
              <CategoryLinks onClick={() => setIsMenuOpen(false)} />
            </motion.div>
          </nav>

          <button
            onClick={() => setIsCartOpen((isCartOpen) => !isCartOpen)}
            className={`${styles.header__button} ${styles["header__button--cart"]}`}
          >
            <CartIcon />
            {!!cartProducts.length && (
              <span className={styles.productsAmount}>
                {cartProducts.length}
              </span>
            )}
          </button>
        </div>

        <Cart showCart={isCartOpen} closeCart={closeCart} />
      </header>
      <Backdrop
        onClick={() => setIsCartOpen(false)}
        showBackDrop={isCartOpen}
      />
    </>
  );
};

export default Header;
