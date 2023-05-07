import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "../../useInViewAnimation";
import { productVariants } from "./productVariants";

type ProductProps = {
  name: string;
  description: string;
  image: string;
  slug: string;
  isNew: boolean;
};

const Product = ({ name, description, image, slug, isNew }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [productAmount, setProductAmount] = useState(0);
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <motion.article
      ref={ref}
      variants={productVariants}
      initial="hidden"
      animate={animation}
      className={styles.product}
    >
      <div className={styles.product__info}>
        {isNew && <div className={styles.product__status}>NEW PRODUCT</div>}
        <h2 className={styles.product__name}>{name}</h2>
        <p className={styles.product__description}>{description}</p>
        <Link to={`/products/${slug}`} className={styles.product__link}>
          SEE PRODUCT
        </Link>
      </div>
      <div className={styles.image__wrapper}>
        <img
          className={styles.product__image}
          draggable={false}
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt={name}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {!imageLoaded && <div className={styles.image__placeholder} />}
    </motion.article>
  );
};

export default Product;
