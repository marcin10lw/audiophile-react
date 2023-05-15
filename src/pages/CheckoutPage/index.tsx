import Container from "../../common/Container";
import GoBack from "../../common/GoBack";
import CheckoutForm from "./CheckoutForm";
import styles from "./index.module.scss";

const CheckoutPage = () => {
  return (
    <Container wide={true}>
      <Container>
        <GoBack />
        <CheckoutForm />
      </Container>
    </Container>
  );
};

export default CheckoutPage;
