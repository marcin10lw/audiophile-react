import { FieldErrors, UseFormRegister } from "react-hook-form/dist/types";

import { FormData } from "../Form/types";
import cashOnDeliveryIcon from "./icon-cash-on-delivery.svg";
import formStyles from "../index.module.scss";
import styles from "./index.module.scss";

type PaymentDetailsProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
};

const PaymentDetails = ({
  errors,
  paymentMethod,
  register,
  setPaymentMethod,
}: PaymentDetailsProps) => {
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
          <div
            className={`${formStyles.input} ${
              errors.eMoneyNumber ? formStyles["input--error"] : ""
            }`}
          >
            <label htmlFor="eMoneyNumber">e-Money Number</label>
            <input
              id="eMoneyNumber"
              {...register("eMoneyNumber", { required: false })}
              placeholder="238521993"
            />
            {errors.eMoneyNumber && (
              <span className={formStyles.warning}>
                {errors.eMoneyNumber.message}
              </span>
            )}
          </div>

          <div
            className={`${formStyles.input} ${
              errors.eMoneyPin ? formStyles["input--error"] : ""
            }`}
          >
            <label htmlFor="eMoneyPin">e-Money PIN</label>
            <input
              id="eMoneyPin"
              {...register("eMoneyPin")}
              placeholder="6891"
            />
            {errors.eMoneyPin && (
              <span className={formStyles.warning}>
                {errors.eMoneyPin.message}
              </span>
            )}
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
