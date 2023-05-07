import styles from "./index.module.scss";
import { useParams } from "react-router-dom";
import Product from "../../../components/Product";
import { getProducts } from "../../../getProducts";
import { useQuery } from "@tanstack/react-query";

type ProductType = {
  id: number;
  new: boolean;
  name: string;
  description: string;
  categoryImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  slug: string;
  category: string;
};

const Products = () => {
  const { name } = useParams();
  const { data: products } = useQuery<ProductType[]>(["products"], getProducts);

  const productsByCategory = products?.filter(
    (product) => product.category === name
  );

  return (
    <section className={styles.products}>
      {productsByCategory &&
        productsByCategory.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            description={product.description}
            image={product.categoryImage.tablet}
            slug={product.slug}
            isNew={product.new}
          />
        ))}
    </section>
  );
};

export default Products;
