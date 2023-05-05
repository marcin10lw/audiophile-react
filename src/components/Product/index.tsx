import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import { useState } from "react";

type ProductProps = {
  name: string;
  description: string;
  image: string;
  id: string;
};

const Product = ({ name, description, image, id }: ProductProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className={styles.product}>
      <div className={styles.product__info}>
        <div className={styles.product__status}>NEW PRODUCT</div>
        <h2 className={styles.product__name}>{name}</h2>
        <p className={styles.product__description}>{description}</p>
        <Link to={`/products/${id}`} className={styles.product__link}>
          SEE PRODUCT
        </Link>
      </div>
      <img
        className={styles.product__image}
        draggable={false}
        src={`${process.env.PUBLIC_URL}/${image}`}
        alt={name}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <div className={styles.image__placeholder} />}
    </article>
  );
};

export default Product;
