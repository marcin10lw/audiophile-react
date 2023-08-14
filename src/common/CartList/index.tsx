import { useSelector } from "react-redux";

import CartItem from "../CartItem";
import { selectCartProducts } from "store/cartSlice";
import styles from "./index.module.scss";

const CartList = ({ location }: { location?: "checkout" }) => {
  const cartProducts = useSelector(selectCartProducts);

  return (
    <ul className={styles.productsList}>
      {cartProducts.map((product) => (
        <CartItem key={product.id} product={product} location={location} />
      ))}
    </ul>
  );
};

export default CartList;
