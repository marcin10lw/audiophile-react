import formStyles from "../index.module.scss";
import styles from "./index.module.scss";

const BillingDetails = () => {
  return (
    <fieldset className={styles.billing}>
      <legend className={formStyles.legend}>BILLING DETAILS</legend>
      <div className={formStyles.gridWrapper}>
        <div>
          <label className={formStyles.label} htmlFor="name">
            Name
          </label>
          <input className={formStyles.input} id="name" type="text" required />
        </div>
        <div className={formStyles.inputWrapper}>
          <label className={formStyles.label} htmlFor="email">
            Email Address
          </label>
          <input
            className={formStyles.input}
            id="email"
            type="email"
            required
          />
          <span className={formStyles.warning}>Wrong format</span>
        </div>
        <div>
          <label className={formStyles.label} htmlFor="tel">
            Phone Number
          </label>
          <input className={formStyles.input} id="tel" type="tel" required />
        </div>
      </div>
    </fieldset>
  );
};

export default BillingDetails;
