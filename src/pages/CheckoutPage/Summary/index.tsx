import CartList from "../../../common/CartList";
import styles from "./index.module.scss";

const Summary = () => {
  return (
    <section className={styles.summary}>
      <h2 className={styles.summary__heading}>SUMMARY</h2>
      <CartList location="checkout" />
      <div className={styles.info}>
        <p className={styles.info__detail}>
          <span>TOTAL</span>$ 5,396
        </p>
        <p className={styles.info__detail}>
          <span>SHIPPING</span>$ 5,396
        </p>
        <p className={styles.info__detail}>
          <span>VAT (INCLUDED)</span>$ 5,396
        </p>

        <p
          className={`${styles.info__detail} ${styles["info__detail--grandTotal"]}`}
        >
          <span>GRAND TOTAL</span>$ 5,396
        </p>
      </div>
      <button className={styles.summary__button} type="submit">
        {" "}
        CONTINUE & PAY
      </button>
    </section>
  );
};

export default Summary;
