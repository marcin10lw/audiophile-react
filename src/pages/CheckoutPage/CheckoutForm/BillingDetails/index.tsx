import styles from "../index.module.scss";

const BillingDetails = () => {
  return (
    <fieldset className={styles.billing}>
      <legend className={styles.legend}>BILLING DETAILS</legend>
      <div className={styles.gridWrapper}>
        <div>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input className={styles.input} id="name" type="text" aria-required />
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
  );
};

export default BillingDetails;
