import BillingDetails from "./BillingDetails";
import PaymentDetails from "./PaymentDetails";
import ShippingInfo from "./ShippingInfo";
import styles from "./index.module.scss";

const Checkout = () => {
  return (
    <section className={styles.checkout}>
      <h1>CHECKOUT</h1>
      <BillingDetails />
      <ShippingInfo />
      <PaymentDetails />
    </section>
  );
};

export default Checkout;
