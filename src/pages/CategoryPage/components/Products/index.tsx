import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "services/getProducts";
import CategoryProduct from "./CategoryProduct";
import styles from "./index.module.scss";

const Products = () => {
  const { name } = useParams();
  const { data: products } = useQuery(["products"], getProducts);

  const productsByCategory = products
    ?.filter((product) => product.category === name)
    .reverse();

  return (
    <section className={styles.products}>
      {productsByCategory &&
        productsByCategory.map((product) => (
          <CategoryProduct key={product.id} product={product} />
        ))}
    </section>
  );
};

export default Products;
