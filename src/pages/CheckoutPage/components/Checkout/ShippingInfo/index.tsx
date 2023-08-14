import InputMask from "react-input-mask";

import styles from "./index.module.scss";
import formStyles from "../index.module.scss";

const ShippingInfo = () => {
  return (
    <fieldset className={styles.shippingInfo}>
      <legend className={formStyles.legend}>SHIPPING INFO</legend>
      <div>
        <label className={formStyles.label} htmlFor="address">
          Your Address
        </label>
        <input
          id="address"
          type="text"
          name="address"
          required
          placeholder="1137 Williams Avenue"
          className={formStyles.input}
        />
      </div>
      <div className={formStyles.gridWrapper}>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="zip">
            ZIP Code
          </label>
          <InputMask
            pattern="\d{5}"
            mask="99999"
            id="zip"
            type="text"
            name="zipCode"
            required
            placeholder="10001"
            className={formStyles.input}
          />
          <span className={formStyles.warning}>Wrong format</span>
        </div>
        <div>
          <label
            className={formStyles.label}
            placeholder="New York"
            htmlFor="city"
          >
            City
          </label>
          <input
            id="city"
            type="text"
            name="city"
            required
            placeholder="New York"
            className={formStyles.input}
          />
        </div>
        <div>
          <label className={formStyles.label} htmlFor="country">
            Country
          </label>
          <input
            id="country"
            type="text"
            name="country"
            required
            placeholder="United States"
            className={formStyles.input}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default ShippingInfo;
