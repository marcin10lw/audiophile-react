import { useSelector } from "react-redux";
import { selectCartProducts, selectTotalPrice } from "../../cartSlice";
import styles from "./index.module.scss";
import CartItem from "./CartItem";

const CartList = () => {
  const cartProducts = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <ul>
      {cartProducts.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CartList;
