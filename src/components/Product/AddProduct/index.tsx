import styles from "./index.module.scss";

const AddProduct = () => {
  return (
    <div className={styles.addProduct}>
      <div className={styles.changeAmount}>
        <button className={styles.changeAmount__button}>-</button>
        <span className={styles.changeAmount__amount}>1</span>
        <button className={styles.changeAmount__button}>+</button>
      </div>
      <button className={styles.addProduct__button}>ADD TO CART</button>
    </div>
  );
};

export default AddProduct;
