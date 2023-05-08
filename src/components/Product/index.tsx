import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "../../useInViewAnimation";
import { productVariants } from "./productVariants";
import { ProductType } from "../../types";
import AddProduct from "./AddProduct";

type ProductProps = {
  product: ProductType;
  location?: string;
};

const Product = ({ product, location }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { animation, ref } = useInViewAnimation(0.4);
  console.log(product);

  const isInProductPage = location === "productPage";
  const formattedPrice = product.price.toLocaleString("en-US", {
    minimumFractionDigits: 0,
  });

  return (
    <motion.section
      ref={ref}
      variants={productVariants}
      initial="hidden"
      animate={animation}
      className={`${styles.product} ${
        isInProductPage ? styles["product--productPage"] : ""
      }`}
    >
      <div className={styles.image__wrapper}>
        <img
          className={styles.product__image}
          draggable={false}
          src={`${process.env.PUBLIC_URL}/${
            isInProductPage
              ? product.image.tablet
              : product.categoryImage.tablet
          }`}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {!imageLoaded && <div className={styles.image__placeholder} />}

      <article className={styles.product__info}>
        {product.new && (
          <div className={styles.product__status}>NEW PRODUCT</div>
        )}
        {isInProductPage ? (
          <h1
            className={`${styles.product__name} ${styles["product__name--productPage"]}`}
          >
            {product.name}
          </h1>
        ) : (
          <h2 className={styles.product__name}>{product.name}</h2>
        )}
        <p className={styles.product__description}>{product.description}</p>
        {isInProductPage ? (
          <>
            <div className={styles.product__price}>$ {formattedPrice}</div>
            <AddProduct />
          </>
        ) : (
          <Link
            to={`/product/${product.slug}`}
            className={styles.product__link}
          >
            SEE PRODUCT
          </Link>
        )}
      </article>
    </motion.section>
  );
};

export default Product;
