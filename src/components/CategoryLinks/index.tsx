import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "./icon-arrow-right.svg";
import styles from "./index.module.scss";

const CategoryLinks = () => {
  return (
    <div className={styles.cathegories}>
      <Link className={styles.category} to="/category/headphones">
        <article className={styles.category__article}>
          <img
            className={styles.category__image}
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-headphones.png`}
            alt="go to headphones"
            draggable={false}
          />
          <div className={styles.category__info}>
            <h2 className={styles.category__name}>HEADPHONES</h2>
            <div className={styles.redirect}>
              <span>SHOP</span>
              <Arrow className={styles.redirect__icon} />
            </div>
          </div>
        </article>
      </Link>
      <Link className={styles.category} to="/category/speakers">
        <article className={styles.category__article}>
          <img
            className={styles.category__image}
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-speakers.png`}
            alt="go to speakers"
            draggable={false}
          />
          <div className={styles.category__info}>
            <h2 className={styles.category__name}>SPEAKERS</h2>
            <div className={styles.redirect}>
              <span>SHOP</span>
              <Arrow className={styles.redirect__icon} />
            </div>
          </div>
        </article>
      </Link>
      <Link className={styles.category} to="/category/earphones">
        <article className={styles.category__article}>
          <img
            className={styles.category__image}
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-earphones.png`}
            alt="go to earphones"
            draggable={false}
          />
          <div className={styles.category__info}>
            <h2 className={styles.category__name}>EARPHONES</h2>
            <div className={styles.redirect}>
              <span>SHOP</span>
              <Arrow className={styles.redirect__icon} />
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default CategoryLinks;
