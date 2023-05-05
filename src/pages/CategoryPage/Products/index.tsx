import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { selectProductsByCategory } from "../../../productsSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import Product from "../../../components/Product";

const Products = () => {
  const { name } = useParams();
  const products = useSelector((state: RootState) =>
    selectProductsByCategory(state, name)
  ).reverse();
  console.log(products);

  return (
    <section className={styles.products}>
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          description={product.description}
          image={product.categoryImage.tablet}
          id={product.slug}
          isNew={product.new}
        />
      ))}
    </section>
  );
};

export default Products;
