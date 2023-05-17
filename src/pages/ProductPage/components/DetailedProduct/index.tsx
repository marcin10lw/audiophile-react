import styles from "./index.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import useInViewAnimation from "../../../../hooks/useInViewAnimation";
import { productVariants } from "./productVariants";
import { ProductType } from "../../../../fakeAPIResponseTypes";
import AddProduct from "./AddProduct";
import { formatPrice } from "../../../../utils/formatPrice";

type ProductProps = {
  product: ProductType;
};

const DetailedProduct = ({ product }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { animation, ref } = useInViewAnimation(0.4);

  const formattedPrice = formatPrice(product.price);

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
          src={`${process.env.PUBLIC_URL}/${product.image.tablet}`}
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      {!imageLoaded && <div className={styles.image__placeholder} />}

      <article className={styles.product__info}>
        {product.new && (
          <div className={styles.product__status}>NEW PRODUCT</div>
        )}
        <h1 className={styles.product__name}>{product.name}</h1>
        <p className={styles.product__description}>{product.description}</p>
        <>
          <div className={styles.product__price}>$ {formattedPrice}</div>
          <AddProduct product={product} />
        </>
      </article>
    </motion.section>
  );
};

export default DetailedProduct;
