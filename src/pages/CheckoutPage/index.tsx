import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addBoughtProducts,
  setGrandTotalPrice,
} from "store/boughtProductsSlice";
import { selectCartProducts, selectTotalPrice } from "store/cartSlice";
import { removeAllProductsFromCart } from "store/cartSlice";
import { fakeSendData } from "services/fakeSendData";
import Container from "common/Container";
import GoBack from "common/GoBack";
import Checkout from "./components/Checkout";
import Summary from "./components/Summary";
import Confirmation from "./components/Confirmation";
import Backdrop from "common/Backdrop";
import styles from "./index.module.scss";

const CheckoutPage = () => {
  const [isSendingData, setIsSendingData] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const cartProducts = useSelector(selectCartProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalPrice = useSelector(selectTotalPrice);
  const grandPriceData = {
    shippingPrice: 50,
    vatRate: 0.2,
    totalPrice,
  };

  useEffect(() => {
    if (!cartProducts.length) {
      navigate("/home");
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSendingData(true);

    try {
      await fakeSendData();
    } catch (error) {}

    dispatch(addBoughtProducts(cartProducts));
    dispatch(setGrandTotalPrice(totalPrice + grandPriceData.shippingPrice));
    setIsSendingData(false);
    setShowConfirmation(true);
    window.scrollTo(0, 0);
  };

  const goBackToHome = () => {
    navigate("/home");
    setShowConfirmation(false);
    dispatch(removeAllProductsFromCart());
  };

  return (
    <Container wide={true}>
      <Container>
        <GoBack />
        <form className={styles.form} onSubmit={onFormSubmit}>
          <Checkout />
          <Summary
            isSendingData={isSendingData}
            grandPriceData={grandPriceData}
          />
        </form>
        <Backdrop showBackDrop={showConfirmation} />
        <Confirmation
          showConfirmation={showConfirmation}
          onClick={goBackToHome}
        />
      </Container>
    </Container>
  );
};

export default CheckoutPage;
