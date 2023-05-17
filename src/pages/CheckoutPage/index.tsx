import { useSelector } from "react-redux";
import Container from "../../common/Container";
import GoBack from "../../common/GoBack";
import Checkout from "./Checkout";
import Summary from "./Summary";
import styles from "./index.module.scss";
import { selectCartProducts } from "../../store/cartSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const cartProducts = useSelector(selectCartProducts);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartProducts.length) {
      navigate("/home");
    }
  }, [cartProducts]);

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <Container wide={true}>
      <Container>
        <GoBack />
        <form className={styles.form} onSubmit={onFormSubmit}>
          <Checkout />
          <Summary />
        </form>
      </Container>
    </Container>
  );
};

export default CheckoutPage;
