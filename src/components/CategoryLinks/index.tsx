import styles from "./index.module.scss";
import CategoryLink from "./CategoryLink";

const CategoryLinks = () => {
  return (
    <div className={styles.categories}>
      <CategoryLink title="headphones" />
      <CategoryLink title="speakers" />
      <CategoryLink title="earphones" />
    </div>
  );
};

export default CategoryLinks;
