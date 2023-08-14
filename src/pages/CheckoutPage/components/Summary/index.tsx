import CartList from "common/CartList";
import Loader from "./Loader";
import { formatPrice } from "utils/formatPrice";
import styles from "./index.module.scss";

type SummaryProps = {
  isSendingData: boolean;
  grandPriceData: {
    shippingPrice: number;
    vatRate: number;
    totalPrice: number;
  };
};

const Summary = ({ isSendingData, grandPriceData }: SummaryProps) => {
  const { shippingPrice, vatRate, totalPrice } = grandPriceData;
  const vat = totalPrice * vatRate;
  const grandTotal = totalPrice + shippingPrice;

  return (
    <section className={styles.summary}>
      <h2 className={styles.summary__heading}>SUMMARY</h2>
      <CartList location="checkout" />
      <div className={styles.info}>
        <p className={styles.info__detail}>
          <span>TOTAL</span>$ {formatPrice(totalPrice)}
        </p>
        <p className={styles.info__detail}>
          <span>SHIPPING</span>$ {shippingPrice}
        </p>
        <p className={styles.info__detail}>
          <span>VAT (INCLUDED)</span>$ {formatPrice(vat)}
        </p>

        <p
          className={`${styles.info__detail} ${styles["info__detail--grandTotal"]}`}
        >
          <span>GRAND TOTAL</span>$ {formatPrice(grandTotal)}
        </p>
      </div>
      <button
        disabled={isSendingData}
        className={styles.summary__button}
        type="submit"
      >
        {isSendingData ? <Loader /> : "CONTINUE & PAY"}
      </button>
    </section>
  );
};

export default Summary;
