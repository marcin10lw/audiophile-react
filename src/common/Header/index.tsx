import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import Cart from "./Cart";
import Backdrop from "common/Backdrop";
import NavigationList from "common/NavigationList";
import CategoryLinks from "common/CategoryLinks";
import { ReactComponent as CartIcon } from "./images/icon-cart.svg";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as Hamburger } from "./images/icon-hamburger.svg";
import { selectCartProducts, selectTotalAmount } from "store/cartSlice";
import styles from "./index.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { pathname } = useLocation();
  const cartProducts = useSelector(selectCartProducts);
  const totalAmount = useSelector(selectTotalAmount);

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

          <nav>
            <div className={styles.nav__list}>
              <NavigationList />
            </div>

            <div
              className={`${styles.nav__categories} ${
                isMenuOpen ? styles["nav__categories--open"] : ""
              }`}
            >
              <CategoryLinks onClick={() => setIsMenuOpen(false)} />
            </div>
          </nav>

          <button
            onClick={() => setIsCartOpen((isCartOpen) => !isCartOpen)}
            className={`${styles.header__button} ${styles["header__button--cart"]}`}
            aria-label="toggle cart"
          >
            <CartIcon />
            {!!cartProducts.length && (
              <span className={styles.productsAmount}>{totalAmount}</span>
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
