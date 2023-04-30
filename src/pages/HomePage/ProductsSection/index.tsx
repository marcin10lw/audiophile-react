import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const ProductsSection = () => {
  return (
    <section className={styles.productsSection}>
      <article className={styles.zx9Article}>
        <img
          className={styles.zx9Article__image}
          src={require("./images/desktop/image-speaker-zx9.png")}
          alt="zx9 speakers"
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
      </article>
    </section>
  );
};

export default ProductsSection;
