import formStyles from "../index.module.scss";
import styles from "./index.module.scss";
import InputMask from "react-input-mask";

const BillingDetails = () => {
  return (
    <fieldset className={styles.billing}>
      <legend className={formStyles.legend}>BILLING DETAILS</legend>
      <div className={formStyles.gridWrapper}>
        <div>
          <label className={formStyles.label} htmlFor="name">
            Name
          </label>
          <input
            className={formStyles.input}
            placeholder="Alexei Ward"
            id="name"
            type="text"
            required
          />
        </div>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="email">
            Email Address
          </label>
          <input
            className={formStyles.input}
            placeholder="alexeiward@mail.com"
            id="email"
            type="email"
            required
          />
          <span className={formStyles.warning}>Wrong format</span>
        </div>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="tel">
            Phone Number
          </label>
          <InputMask
            className={formStyles.input}
            placeholder="+1 202-555-0136"
            pattern="[+]\d{1,2}\s\d{3}[-]\d{3}[-]\d{4}"
            mask="+1 999-999-9999"
            maskChar=" "
            id="tel"
            type="tel"
            required
          />
          <span className={formStyles.warning}>Wrong format</span>
        </div>
      </div>
    </fieldset>
  );
};

export default BillingDetails;
