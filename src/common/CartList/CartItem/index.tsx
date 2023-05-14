import { CartProduct } from "../../../cartSlice";
import styles from "./index.module.scss";

type CartItemProps = {
  product: CartProduct;
};

const CartItem = ({ product }: CartItemProps) => {
  return (
    <li className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        width={64}
        src={`${process.env.PUBLIC_URL}${product.image}`}
        alt={product.name}
      />
      <div className={styles.cartItem__info}>
        <h5>XX99 MK II</h5>
        <p>$ 2,999</p>
      </div>
      <div className={styles.cartItem__changeAmount}>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
