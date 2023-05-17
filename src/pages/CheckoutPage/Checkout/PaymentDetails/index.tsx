import { useState } from "react";
import formStyles from "../index.module.scss";
import styles from "./index.module.scss";
import cashOnDeliveryIcon from "./icon-cash-on-delivery.svg";

const PaymentDetails = () => {
  const [paymentMethod, setPaymentMethod] = useState("eMoney");

  return (
    <fieldset>
      <legend className={formStyles.legend}>PAYMENT DETAILS</legend>
      <div className={styles.paymentGrid}>
        <div className={`${formStyles.label} ${styles.paymentLabel}`}>
          Payment Method
        </div>
        <div className={styles.radioGroup}>
          <div className={styles.radioWrapper}>
            <input
              id="radio1"
              name="payment"
              checked={paymentMethod === "eMoney"}
              type="radio"
              value={"eMoney"}
              onChange={({ target }) => setPaymentMethod(target.value)}
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
              checked={paymentMethod === "cashOnDelivery"}
              type="radio"
              value={"cashOnDelivery"}
              onChange={({ target }) => setPaymentMethod(target.value)}
              className={styles.radioInput}
            />
            <label htmlFor="radio2" className={styles.radioLabel}>
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
      {paymentMethod === "eMoney" ? (
        <div className={styles.eMoney}>
          <div>
            <label htmlFor="eMoneyNumber" className={formStyles.label}>
              e-Money Number
            </label>
            <input
              id="eMoneyNumber"
              name="eMoneyNumber"
              required={paymentMethod === "eMoney"}
              className={formStyles.input}
            />
          </div>

          <div>
            <label htmlFor="eMoneyPin" className={formStyles.label}>
              e-Money PIN
            </label>
            <input
              id="eMoneyPin"
              name="eMoneyPin"
              required={paymentMethod === "eMoney"}
              className={formStyles.input}
            />
          </div>
        </div>
      ) : (
        <div className={styles.cashOnDelivery}>
          <img src={cashOnDeliveryIcon} alt="" />
          <p>
            The ‘Cash on Delivery’ option enables you to pay in cash when our
            delivery courier arrives at your residence. Just make sure your
            address is correct so that your order will not be cancelled.
          </p>
        </div>
      )}
    </fieldset>
  );
};

export default PaymentDetails;
