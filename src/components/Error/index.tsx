import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <section className={styles.error}>
      <div className={styles.error__wrapper}>
        <BiError className={styles.error__icon} />
        <p className={styles.error__message}>
          Oops, something went wrong. Please check your internet connection and
          try again.
        </p>
        <Link to="/home" className={styles.error__link}>
          Go back
        </Link>
      </div>
    </section>
  );
};

export default Error;
