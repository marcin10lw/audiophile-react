import { useSelector } from "react-redux";
import Container from "../../common/Container";
import GoBack from "../../common/GoBack";
import Checkout from "./components/Checkout";
import Summary from "./components/Summary";
import styles from "./index.module.scss";
import { selectCartProducts } from "../../store/cartSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeSendData } from "../../services/fakeSendData";

const CheckoutPage = () => {
  const [isSendingData, setIsSendingData] = useState(false);
  const cartProducts = useSelector(selectCartProducts);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartProducts.length) {
      navigate("/home");
    }
  }, [cartProducts]);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSendingData(true);

    const formData = new FormData(event.currentTarget);
    const checkoutData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      zip: formData.get("zipCode"),
      city: formData.get("city"),
      country: formData.get("country"),
      paymentMethod: formData.get("payment"),
      eMoneyNumber: formData.get("eMoneyNumber") ?? null,
      eMoneyPin: formData.get("eMoneyPin") ?? null,
    };

    try {
      await fakeSendData();
    } catch (error) {}
    setIsSendingData(false);
  };

  return (
    <Container wide={true}>
      <Container>
        <GoBack />
        <form className={styles.form} onSubmit={onFormSubmit}>
          <Checkout />
          <Summary isSendingData={isSendingData} />
        </form>
      </Container>
    </Container>
  );
};

export default CheckoutPage;
