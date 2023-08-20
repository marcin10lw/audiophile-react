import { useDispatch, useSelector } from "react-redux";

import { selectCartProducts, selectTotalPrice } from "store/cartSlice";
import {
  addBoughtProducts,
  setGrandTotalPrice,
} from "store/boughtProductsSlice";
import Checkout from "..";
import Summary from "../../Summary";
import styles from "./index.module.scss";
import useCustomForm from "./useCustomForm";

type FormProps = {
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
};

const Form = ({ setShowConfirmation }: FormProps) => {
  const dispatch = useDispatch();
  const cartProducts = useSelector(selectCartProducts);

  const totalPrice = useSelector(selectTotalPrice);
  const grandPriceData = {
    shippingPrice: 50,
    vatRate: 0.2,
    totalPrice,
  };

  const onSubmitCallback = () => {
    dispatch(addBoughtProducts(cartProducts));
    dispatch(setGrandTotalPrice(totalPrice + grandPriceData.shippingPrice));
    setShowConfirmation(true);
    window.scrollTo(0, 0);
  };

  const {
    status,
    paymentMethod,
    errors,
    register,
    handleSubmit,
    onFormSubmit,
    setPaymentMethod,
  } = useCustomForm(onSubmitCallback);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onFormSubmit)}>
      <Checkout
        register={register}
        errors={errors}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <Summary
        isSendingData={status === "loading"}
        grandPriceData={grandPriceData}
      />
    </form>
  );
};

export default Form;
