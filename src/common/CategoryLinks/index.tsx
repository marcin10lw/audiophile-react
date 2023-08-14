import CategoryLink from "./CategoryLink";
import styles from "./index.module.scss";

type CategoryLinksProps = {
  onClick?: () => void;
};

const CategoryLinks = ({ onClick }: CategoryLinksProps) => {
  return (
    <div className={styles.categories}>
      <CategoryLink onClick={onClick} title="headphones" />
      <CategoryLink onClick={onClick} title="speakers" />
      <CategoryLink onClick={onClick} title="earphones" />
    </div>
  );
};

export default CategoryLinks;
