import Container from "../../common/Container";
import GoBack from "../../common/GoBack";
import Checkout from "./Checkout";
import Summary from "./Summary";
import styles from "./index.module.scss";

const CheckoutPage = () => {
  return (
    <Container wide={true}>
      <Container>
        <GoBack />
        <form className={styles.form}>
          <Checkout />
          <Summary />
        </form>
      </Container>
    </Container>
  );
};

export default CheckoutPage;
