import { UseFormRegister, FieldErrors } from "react-hook-form/dist/types";

import { FormData } from "./Form/types";
import BillingDetails from "./BillingDetails";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import styles from "./index.module.scss";

type CheckoutProps = {
  errors: FieldErrors<FormData>;
  paymentMethod: string;
  register: UseFormRegister<FormData>;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
};

const Checkout = ({
  register,
  errors,
  paymentMethod,
  setPaymentMethod,
}: CheckoutProps) => {
  return (
    <section className={styles.checkout}>
      <h1>CHECKOUT</h1>
      <BillingDetails errors={errors} register={register} />
      <ShippingInfo errors={errors} register={register} />
      <PaymentDetails
        errors={errors}
        register={register}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
    </section>
  );
};

export default Checkout;
