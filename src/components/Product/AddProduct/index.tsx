import { useState } from "react";
import styles from "./index.module.scss";

const AddProduct = () => {
  const [productAmount, setProductAmount] = useState(1);

  const increaseAmount = () => setProductAmount((amount) => amount + 1);

  const decreaseAmount = () => {
    if (productAmount === 1) return;

    setProductAmount((amount) => amount - 1);
  };

  return (
    <div className={styles.addProduct}>
      <div className={styles.changeAmount}>
        <button
          onClick={decreaseAmount}
          disabled={productAmount === 1}
          className={styles.changeAmount__button}
        >
          -
        </button>
        <span className={styles.changeAmount__amount}>{productAmount}</span>
        <button
          onClick={increaseAmount}
          className={styles.changeAmount__button}
        >
          +
        </button>
      </div>
      <button className={styles.addProduct__button}>ADD TO CART</button>
    </div>
  );
};

export default AddProduct;
