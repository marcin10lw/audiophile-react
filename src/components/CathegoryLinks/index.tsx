import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "./icon-arrow-right.svg";
import styles from "./index.module.scss";

const CathegoryLinks = () => {
  return (
    <div className={styles.cathegories}>
      <Link className={styles.cathegory} to="headphones">
        <article className={styles.cathegory__article}>
          <img
            className={styles.cathegory__image}
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-headphones.png`}
            alt="go to headphones"
          />
          <div className={styles.cathegory__info}>
            <h2 className={styles.cathegory__name}>HEADPHONES</h2>
            <div className={styles.redirect}>
              <span>SHOP</span>
              <Arrow className={styles.redirect__icon} />
            </div>
          </div>
        </article>
      </Link>
      <Link className={styles.cathegory} to="speakers">
        <article className={styles.cathegory__article}>
          <img
            className={styles.cathegory__image}
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-speakers.png`}
            alt="go to speakers"
          />
          <div className={styles.cathegory__info}>
            <h2 className={styles.cathegory__name}>SPEAKERS</h2>
            <div className={styles.redirect}>
              <span>SHOP</span>
              <Arrow className={styles.redirect__icon} />
            </div>
          </div>
        </article>
      </Link>
      <Link className={styles.cathegory} to="earphones">
        <article className={styles.cathegory__article}>
          <img
            className={styles.cathegory__image}
            src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-earphones.png`}
            alt="go to earphones"
          />
          <div className={styles.cathegory__info}>
            <h2 className={styles.cathegory__name}>EARPHONES</h2>
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

export default CathegoryLinks;
