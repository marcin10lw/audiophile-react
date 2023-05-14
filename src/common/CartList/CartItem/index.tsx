import { useDispatch } from "react-redux";
import {
  CartProduct,
  decreaseAmount,
  increaseAmount,
} from "../../../cartSlice";
import { formatPrice } from "../../formatPrice";
import styles from "./index.module.scss";

type CartItemProps = {
  product: CartProduct;
};

const CartItem = ({ product }: CartItemProps) => {
  const formatedPrice = formatPrice(product.price);
  const dispatch = useDispatch();

  const onDecreaseAmount = () => {
    if (product.amount === 0) return;
    dispatch(decreaseAmount(product.id));
  };

  const onIncreaseAmount = () => {
    dispatch(increaseAmount(product.id));
  };

  return (
    <li className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        width={64}
        src={`${process.env.PUBLIC_URL}${product.image}`}
        alt={product.name}
      />
      <div className={styles.cartItem__info}>
        <h5>{product.name}</h5>
        <p>$ {formatedPrice}</p>
      </div>
      <div className={styles.cartItem__changeAmount}>
        <button onClick={onDecreaseAmount}>-</button>
        <span>{product.amount}</span>
        <button onClick={onIncreaseAmount}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
