import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "../../../useInViewAnimation";
import { productVariants } from "./productVariants";
import { ProductType } from "../../../types";

type ProductProps = {
  product: ProductType;
};

const CategoryProduct = ({ product }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <motion.section
      ref={ref}
      variants={productVariants}
      initial="hidden"
      animate={animation}
      className={styles.product}
    >
      <div className={styles.image__wrapper}>
        <img
          className={styles.product__image}
          draggable={false}
          src={`${process.env.PUBLIC_URL}/${product.categoryImage.tablet}`}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {!imageLoaded && <div className={styles.image__placeholder} />}

      <article className={styles.product__info}>
        {product.new && (
          <div className={styles.product__status}>NEW PRODUCT</div>
        )}
        <h2 className={styles.product__name}>{product.name}</h2>
        <p className={styles.product__description}>{product.description}</p>
        <Link to={`/product/${product.slug}`} className={styles.product__link}>
          SEE PRODUCT
        </Link>
      </article>
    </motion.section>
  );
};

export default CategoryProduct;
