import { useDispatch } from "react-redux";
import {
  CartProduct,
  decreaseAmount,
  increaseAmount,
} from "../../../store/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

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
      <div className={styles.cartItem__image}>
        <img
          src={`${process.env.PUBLIC_URL}${product.image}`}
          alt={product.name}
        />
      </div>
      <div className={styles.cartItem__info}>
        <Link to={`/product/${product.slug}`}>
          <h5>{product.name.toLocaleUpperCase()}</h5>
        </Link>
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
