import styles from "../index.module.scss";

const PaymentDetails = () => {
  return (
    <fieldset>
      <legend className={styles.legend}>PAYMENT DETAILS</legend>
      <div>
        <div>Payment Method</div>
        <div className={styles.radioWrapper}>
          <input
            id="radio1"
            name="payment"
            defaultChecked={true}
            type="radio"
            value={"eMoney"}
            className={styles.radioInput}
          />
          <label className={styles.radioLabel} htmlFor="radio1">
            e-Money
          </label>
        </div>
        <div className={styles.radioWrapper}>
          <input
            id="radio2"
            name="payment"
            type="radio"
            value={"cashOnDelivery"}
            className={styles.radioInput}
          />
          <label htmlFor="radio2" className={styles.radioLabel}>
            Cash on Delivery
          </label>
        </div>
      </div>
    </fieldset>
  );
};

export default PaymentDetails;
