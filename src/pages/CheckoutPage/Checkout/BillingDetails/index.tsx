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
            id="name"
            name="name"
            type="text"
            required
            placeholder="Alexei Ward"
            className={formStyles.input}
          />
        </div>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="alexeiward@mail.com"
            className={formStyles.input}
          />
          <span className={formStyles.warning}>Wrong format</span>
        </div>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="tel">
            Phone Number
          </label>
          <InputMask
            pattern="[+]\d{1,2}\s\d{3}[-]\d{3}[-]\d{4}"
            mask="+1 999-999-9999"
            maskChar=" "
            id="tel"
            type="tel"
            name="phone"
            required
            placeholder="+1 202-555-0136"
            className={formStyles.input}
          />
          <span className={formStyles.warning}>Wrong format</span>
        </div>
      </div>
    </fieldset>
  );
};

export default BillingDetails;
