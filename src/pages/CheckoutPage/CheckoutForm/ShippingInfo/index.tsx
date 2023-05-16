import styles from "../index.module.scss";

const ShippingInfo = () => {
  return (
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
          <input className={styles.input} id="zip" type="text" aria-required />
        </div>
        <div>
          <label className={styles.label} htmlFor="city">
            City
          </label>
          <input className={styles.input} id="city" type="text" aria-required />
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
  );
};

export default ShippingInfo;
