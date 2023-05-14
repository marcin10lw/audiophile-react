import { AnimatePresence, motion } from "framer-motion";
import CartList from "../CartList";
import styles from "./index.module.scss";

type CartProps = {
  showCart: boolean;
};

const Cart = ({ showCart }: CartProps) => {
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
            <h4>CART (3)</h4>
            <button>Remove all</button>
          </header>
          <CartList />
          <div className={styles.total}>
            <span className={styles.total__info}>TOTAL</span>
            <span className={styles.total__amount}>${}</span>
          </div>
          <button className={styles.cart__checkout}>CHECKOUT</button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Cart;
