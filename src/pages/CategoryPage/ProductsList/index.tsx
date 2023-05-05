import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import { selectProductsByCategory } from "../../../productsSlice";
import { useParams } from "react-router-dom";
import { RootState } from "../../../store";
import Product from "../../../components/Product";

const ProductsList = () => {
  const { name } = useParams();
  const products = useSelector((state: RootState) =>
    selectProductsByCategory(state, name)
  ).reverse();
  console.log(products);

  return (
    <section>
      <ul>
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.image.desktop}
            id={product.slug}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProductsList;
