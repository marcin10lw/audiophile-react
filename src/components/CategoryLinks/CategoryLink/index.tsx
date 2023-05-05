import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { ReactComponent as Arrow } from "../icon-arrow-right.svg";

type CategoryLinkProps = {
  title: string;
};

const CategoryLink = ({ title }: CategoryLinkProps) => {
  return (
    <Link className={styles.category} to={`/category/${title}`}>
      <article className={styles.category__article}>
        <img
          className={styles.category__image}
          src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-category-thumbnail-${title}.png`}
          alt={`go to ${title}`}
          draggable={false}
        />
        <div className={styles.category__info}>
          <h2 className={styles.category__name}>{title.toLocaleUpperCase()}</h2>
          <div className={styles.redirect}>
            <span>SHOP</span>
            <Arrow className={styles.redirect__icon} />
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CategoryLink;
