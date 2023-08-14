import { RecommendedProductType } from "fakeAPIResponseTypes";
import RecommendedProduct from "./RecommendedProduct";
import styles from "./index.module.scss";

type RecommendedProps = {
  otherProducts: RecommendedProductType[];
};

const Recommended = ({ otherProducts }: RecommendedProps) => {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.aside__header}>YOU MAY ALSO LIKE</h3>
      <div className={styles.recommended}>
        {otherProducts.map((product) => (
          <RecommendedProduct
            key={product.slug}
            image={product.image}
            name={product.name}
            slug={product.slug}
          />
        ))}
      </div>
    </aside>
  );
};

export default Recommended;
