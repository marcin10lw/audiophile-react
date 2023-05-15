import styles from "./index.module.scss";

const CheckoutForm = () => {
  return (
    <form className={styles.form}>
      <fieldset className={styles.billing}>
        <legend className={styles.legend}>BILLING DETAILS</legend>
        <div className={styles.gridWrapper}>
          <div>
            <label className={styles.label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.input}
              id="name"
              type="text"
              aria-required
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor="email">
              Email Address
            </label>
            <span className={styles.warning}>Wrong format</span>
            <input
              className={styles.input}
              id="email"
              type="email"
              aria-required
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="tel">
              Phone Number
            </label>
            <input className={styles.input} id="tel" type="tel" aria-required />
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.shippingInfo}>
        <legend className={styles.legend}>SHIPPING INFO</legend>
        <div>
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <input
            className={styles.input}
            id="address"
            type="text"
            aria-required
          />
        </div>
        <div className={styles.gridWrapper}>
          <div>
            <label className={styles.label} htmlFor="zip">
              ZIP Code
            </label>
            <input
              className={styles.input}
              id="zip"
              type="text"
              aria-required
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="city">
              City
            </label>
            <input
              className={styles.input}
              id="city"
              type="text"
              aria-required
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="country">
              Country
            </label>
            <input
              className={styles.input}
              id="country"
              type="text"
              aria-required
            />
          </div>
        </div>
      </fieldset>

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
    </form>
  );
};

export default CheckoutForm;
