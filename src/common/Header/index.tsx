import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { motion } from "framer-motion";

import Cart from "./Cart";
import Backdrop from "common/Backdrop";
import NavigationList from "common/NavigationList";
import CategoryLinks from "common/CategoryLinks";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { menuVariants } from "./variants";
import { selectCartProducts } from "store/cartSlice";
import styles from "./index.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartButtonRef = useRef<HTMLButtonElement>(null);

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

          <Link
            to="/home"
            className={styles.header__logo}
            aria-label="go back to home page"
          >
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
            ref={cartButtonRef}
            onClick={() => setIsCartOpen((isCartOpen) => !isCartOpen)}
            className={`${styles.header__button} ${styles["header__button--cart"]}`}
            aria-label="toggle cart"
          >
            <CartIcon />
            {!!cartProducts.length && (
              <span className={styles.productsAmount}>
                {cartProducts.length}
              </span>
            )}
          </button>
        </div>

        <Cart
          showCart={isCartOpen}
          closeCart={closeCart}
          buttonRef={cartButtonRef}
        />
      </header>
      <Backdrop
        onClick={() => setIsCartOpen(false)}
        showBackDrop={isCartOpen}
      />
    </>
  );
};

export default Header;
