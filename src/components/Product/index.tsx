import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "../../useInViewAnimation";
import { productVariants } from "./productVariants";

type ProductProps = {
  name: string;
  description: string;
  image: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  slug: string;
  isNew: boolean;
  location?: string;
};

const Product = ({
  name,
  description,
  image,
  slug,
  isNew,
  location,
}: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [productAmount, setProductAmount] = useState(0);
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <motion.section
      ref={ref}
      variants={productVariants}
      initial="hidden"
      animate={animation}
      className={`${styles.product} ${
        location === "productPage" ? styles["product--productPage"] : ""
      }`}
    >
      <div className={styles.image__wrapper}>
        <img
          className={styles.product__image}
          draggable={false}
          src={`${process.env.PUBLIC_URL}/${image.tablet}`}
          alt={name}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {!imageLoaded && <div className={styles.image__placeholder} />}

      <article className={styles.product__info}>
        {isNew && <div className={styles.product__status}>NEW PRODUCT</div>}
        {location === "productPage" ? (
          <h1
            className={`${styles.product__name} ${styles["product__name--productPage"]}`}
          >
            {name}
          </h1>
        ) : (
          <h2 className={styles.product__name}>{name}</h2>
        )}
        <p className={styles.product__description}>{description}</p>
        <Link to={`/product/${slug}`} className={styles.product__link}>
          SEE PRODUCT
        </Link>
      </article>
    </motion.section>
  );
};

export default Product;
