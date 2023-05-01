import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const ProductsSection = () => {
  return (
    <section className={styles.productsSection}>
      <article className={styles.zx9Article}>
        <div className={styles.zx9Article__flex}>
          <img
            className={styles.zx9Article__image}
            src={require("./images/desktop/image-speaker-zx9.png")}
            alt="zx9 speakers"
            draggable={false}
          />
          <div className={styles.infoWrapper}>
            <h2 className={styles.zx9Article__name}>ZX9 SPEAKER</h2>
            <p className={styles.zx9Article__description}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to="/speakers/zx9-speaker" className={styles.link}>
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </article>
      <article className={styles.zx7Article}>
        <h2 className={styles.article__name}>ZX7 SPEAKER</h2>
        <Link
          to="/speakers/zx7-speaker"
          className={`${styles.link} ${styles["link--transparent"]}`}
        >
          SEE PRODUCT
        </Link>
      </article>
      <article className={styles.yx1Article}>
        <div className={styles.yx1Article__image} />
        <div className={styles.yx1Article__info}>
          <h2 className={styles.article__name}>YX1 EARPHONES</h2>
          <Link
            to="/speakers/yx1-earphones"
            className={`${styles.link} ${styles["link--transparent"]}`}
          >
            SEE PRODUCT
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ProductsSection;
