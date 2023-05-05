import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "../../useInViewAnimation";

type ProductProps = {
  name: string;
  description: string;
  image: string;
  id: string;
};

const productVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const Product = ({ name, description, image, id }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
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
        <div className={styles.product__status}>NEW PRODUCT</div>
        <h2 className={styles.product__name}>{name}</h2>
        <p className={styles.product__description}>{description}</p>
        <Link to={`/products/${id}`} className={styles.product__link}>
          SEE PRODUCT
        </Link>
      </div>
      <div>
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
