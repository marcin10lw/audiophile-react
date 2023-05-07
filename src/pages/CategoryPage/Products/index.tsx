import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import Product from "../../../components/Product";
import { getProducts } from "../../../getProducts";
import { useQuery } from "@tanstack/react-query";

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
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.categoryImage}
            slug={product.slug}
            isNew={product.new}
          />
        ))}
    </section>
  );
};

export default Products;
