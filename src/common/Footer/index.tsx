import { Link, useLocation } from "react-router-dom";
import Container from "../Container";
import styles from "./index.module.scss";
import { ReactComponent as Logo } from "../logo.svg";
import { ReactComponent as Facebook } from "./images/icon-facebook.svg";
import { ReactComponent as Twitter } from "./images/icon-twitter.svg";
import { ReactComponent as Instagram } from "./images/icon-instagram.svg";
import NavigationList from "../NavigationList";

const Footer = () => {
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${
        pathname === "/home" ? styles["footer--home"] : ""
      }`}
    >
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.flexWrapper}>
            <Link to="/home" className={styles.footer__logo}>
              <Logo />
            </Link>
            <nav>
              <NavigationList />
            </nav>
          </div>
          <div className={styles.flexWrapper}>
            <p className={styles.footer__text}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <ul className={styles.footer__icons}>
              <li>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <Twitter />
                </a>
              </li>
              <li>
                <a href="" target="_blank" rel="noreferrer noopener">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footer__copyright}>
            Copyright {currentYear}. All Rights Reserved
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
