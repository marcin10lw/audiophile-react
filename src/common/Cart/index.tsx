import { AnimatePresence, motion } from "framer-motion";
import CartList from "../CartList";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectCartProducts, selectTotalPrice } from "../../cartSlice";
import { formatPrice } from "../formatPrice";

type CartProps = {
  showCart: boolean;
};

const Cart = ({ showCart }: CartProps) => {
  const cartProducts = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const formatedPrice = formatPrice(totalPrice);
  console.log(totalPrice);

  return (
    <AnimatePresence>
      {showCart && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.cart}
        >
          <header className={styles.cart__header}>
            <h4>CART ({cartProducts.length})</h4>
            {!!cartProducts.length && <button>Remove all</button>}
          </header>
          <CartList />
          <div className={styles.total}>
            <span className={styles.total__info}>TOTAL</span>
            <span className={styles.total__amount}>$ {formatedPrice}</span>
          </div>
          <button className={styles.cart__checkout}>CHECKOUT</button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Cart;
