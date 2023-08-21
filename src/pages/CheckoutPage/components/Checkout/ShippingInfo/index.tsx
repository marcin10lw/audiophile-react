import { FieldErrors, UseFormRegister } from "react-hook-form/dist/types";
import InputMask from "react-input-mask";

import { FormData } from "../Form/types";
import formStyles from "../index.module.scss";
import styles from "./index.module.scss";

type ShippingInfoProps = {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
};

const ShippingInfo = ({ register, errors }: ShippingInfoProps) => {
  return (
    <fieldset className={styles.shippingInfo}>
      <legend className={formStyles.legend}>SHIPPING INFO</legend>
      <div
        className={`${formStyles.input} ${
          errors.address ? formStyles["input--error"] : ""
        }`}
      >
        <label htmlFor="address">Your Address</label>
        <input
          id="address"
          {...register("address")}
          placeholder="1137 Williams Avenue"
        />
        {errors.address && (
          <span className={formStyles.warning}>{errors.address.message}</span>
        )}
      </div>

      <div className={formStyles.gridWrapper}>
        <div
          className={`${formStyles.input} ${
            errors.zipCode ? formStyles["input--error"] : ""
          }`}
        >
          <label htmlFor="zip">ZIP Code</label>
          <InputMask
            mask="99999"
            id="zip"
            {...register("zipCode")}
            placeholder="10001"
          />
          {errors.zipCode && (
            <span className={formStyles.warning}>{errors.zipCode.message}</span>
          )}
        </div>

        <div
          className={`${formStyles.input} ${
            errors.city ? formStyles["input--error"] : ""
          }`}
        >
          <label htmlFor="city">City</label>
          <input id="city" {...register("city")} placeholder="New York" />
          {errors.city && (
            <span className={formStyles.warning}>{errors.city.message}</span>
          )}
        </div>

        <div
          className={`${formStyles.input} ${
            errors.country ? formStyles["input--error"] : ""
          }`}
        >
          <label htmlFor="country">Country</label>
          <input
            id="country"
            {...register("country")}
            placeholder="United States"
          />
          {errors.country && (
            <span className={formStyles.warning}>{errors.country.message}</span>
          )}
        </div>
      </div>
    </fieldset>
  );
};

export default ShippingInfo;
