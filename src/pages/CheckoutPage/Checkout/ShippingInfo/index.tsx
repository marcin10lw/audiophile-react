import formStyles from "../index.module.scss";
import styles from "./index.module.scss";
import InputMask from "react-input-mask";

const ShippingInfo = () => {
  return (
    <fieldset className={styles.shippingInfo}>
      <legend className={formStyles.legend}>SHIPPING INFO</legend>
      <div>
        <label className={formStyles.label} htmlFor="address">
          Your Address
        </label>
        <input
          className={formStyles.input}
          placeholder="1137 Williams Avenue"
          id="address"
          type="text"
          required
        />
      </div>
      <div className={formStyles.gridWrapper}>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="zip">
            ZIP Code
          </label>
          <InputMask
            className={formStyles.input}
            placeholder="10001"
            pattern="\d{5}"
            mask="99999"
            id="zip"
            type="text"
            required
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
            className={formStyles.input}
            placeholder="New York"
            id="city"
            type="text"
            required
          />
        </div>
        <div>
          <label className={formStyles.label} htmlFor="country">
            Country
          </label>
          <input
            className={formStyles.input}
            placeholder="United States"
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
