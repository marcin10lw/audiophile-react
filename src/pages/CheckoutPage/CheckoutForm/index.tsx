import BillingDetails from "./BillingDetails";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import styles from "./index.module.scss";

const CheckoutForm = () => {
  return (
    <form className={styles.form}>
      <section className={styles.checkout}>
        <h1>CHECKOUT</h1>
        <BillingDetails />
        <ShippingInfo />
        <PaymentDetails />
      </section>
    </form>
  );
};

export default CheckoutForm;
