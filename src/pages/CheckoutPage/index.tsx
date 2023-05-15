import Container from "../../common/Container";
import GoBack from "../../common/GoBack";
import styles from "./index.module.scss";

const CheckoutPage = () => {
  return (
    <Container wide={true}>
      <Container>
        <GoBack />
      </Container>
    </Container>
  );
};

export default CheckoutPage;
