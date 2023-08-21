import { UseFormRegister, FieldErrors } from "react-hook-form/dist/types";
import InputMask from "react-input-mask";

import { FormData } from "../Form/types";
import formStyles from "../index.module.scss";
import styles from "./index.module.scss";

type BillingDetailsProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const BillingDetails = ({ register, errors }: BillingDetailsProps) => {
  return (
    <fieldset className={styles.billing}>
      <legend className={formStyles.legend}>BILLING DETAILS</legend>
      <div className={formStyles.gridWrapper}>
        <div
          className={`${formStyles.input} ${
            errors.name ? formStyles["input--error"] : ""
          }`}
        >
          <label htmlFor="name">Name</label>
          <input id="name" {...register("name")} placeholder="Alexei Ward" />
          {errors.name && (
            <span className={formStyles.warning}>{errors.name.message}</span>
          )}
        </div>

        <div
          className={`${formStyles.input} ${
            errors.email ? formStyles["input--error"] : ""
          }`}
        >
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            placeholder="alexeiward@mail.com"
          />
          {errors.email && (
            <span className={formStyles.warning}>{errors.email.message}</span>
          )}
        </div>

        <div
          className={`${formStyles.input} ${
            errors.phone ? formStyles["input--error"] : ""
          }`}
        >
          <label htmlFor="tel">Phone Number</label>
          <InputMask
            id="tel"
            type="tel"
            mask="+1 999-999-9999"
            maskChar="_"
            {...register("phone")}
            placeholder="+1 202-555-0136"
          />
          {errors.phone && (
            <span className={formStyles.warning}>{errors.phone.message}</span>
          )}
        </div>
      </div>
    </fieldset>
  );
};

export default BillingDetails;
