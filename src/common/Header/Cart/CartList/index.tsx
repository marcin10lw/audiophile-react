import { useSelector } from "react-redux";
import { selectCartProducts } from "../../../../store/cartSlice";
import styles from "./index.module.scss";
import CartItem from "./CartItem";

const CartList = () => {
  const cartProducts = useSelector(selectCartProducts);

  return (
    <ul className={styles.productsList}>
      {cartProducts.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CartList;
