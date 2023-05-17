import { useSelector } from "react-redux";
import CartList from "../../../../common/CartList";
import styles from "./index.module.scss";
import { selectTotalPrice } from "../../../../store/cartSlice";
import { formatPrice } from "../../../../utils/formatPrice";
import Loader from "./Loader";

type SummaryProps = {
  isSendingData: boolean;
};

const Summary = ({ isSendingData }: SummaryProps) => {
  const totalPrice = useSelector(selectTotalPrice);
  const shippingPrice = 50;
  const vatRate = 0.2;
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
