import AnimationWrapper from "../../../components/AnimationWrapper";
import styles from "./index.module.scss";

type ProductInfoProps = {
  features: string;
  included: {
    quantity: number;
    item: string;
  }[];
};

const ProductInfo = ({ features, included }: ProductInfoProps) => {
  return (
    <AnimationWrapper>
      <section className={styles.productInfo}>
        <article className={styles.features}>
          <h2 className={styles.heading}>FEATURES</h2>
          <p className={styles.productInfo__text}>{features}</p>
        </article>
        <article className={styles.box}>
          <h2 className={styles.heading}>IN THE BOX</h2>
          <ul className={styles.box__list}>
            {included.map(({ item, quantity }) => (
              <li key={item} className={styles.box__item}>
                <span className={styles.quantity}>{quantity}x</span>
                <span className={styles.item}>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </AnimationWrapper>
  );
};

export default ProductInfo;
