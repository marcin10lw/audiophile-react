import formStyles from "../index.module.scss";
import styles from "./index.module.scss";

const ShippingInfo = () => {
  return (
    <fieldset className={styles.shippingInfo}>
      <legend className={formStyles.legend}>SHIPPING INFO</legend>
      <div>
        <label className={formStyles.label} htmlFor="address">
          Address
        </label>
        <input className={formStyles.input} id="address" type="text" required />
      </div>
      <div className={formStyles.gridWrapper}>
        <div>
          <label className={formStyles.label} htmlFor="zip">
            ZIP Code
          </label>
          <input className={formStyles.input} id="zip" type="text" required />
        </div>
        <div>
          <label className={formStyles.label} htmlFor="city">
            City
          </label>
          <input className={formStyles.input} id="city" type="text" required />
        </div>
        <div>
          <label className={formStyles.label} htmlFor="country">
            Country
          </label>
          <input
            className={formStyles.input}
            id="country"
            type="text"
            required
          />
        </div>
      </div>
    </fieldset>
  );
};

export default ShippingInfo;
