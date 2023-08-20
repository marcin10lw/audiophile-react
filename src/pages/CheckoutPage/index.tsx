import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCartProducts } from "store/cartSlice";
import { removeAllProductsFromCart } from "store/cartSlice";
import Container from "common/Container";
import GoBack from "common/GoBack";
import Confirmation from "./components/Confirmation";
import Backdrop from "common/Backdrop";
import Form from "./components/Checkout/Form";

const CheckoutPage = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const cartProducts = useSelector(selectCartProducts);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cartProducts.length) {
      navigate("/home");
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);

  const goBackToHome = () => {
    navigate("/home");
    setShowConfirmation(false);
    dispatch(removeAllProductsFromCart());
  };

  return (
    <Container wide={true}>
      <Container>
        <GoBack />
        <Form setShowConfirmation={setShowConfirmation} />
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
