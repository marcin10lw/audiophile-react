import { AnimatePresence, motion } from "framer-motion";
import CartList from "../../CartList";
import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { selectCartProducts, selectTotalPrice } from "../../../store/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
import { useState } from "react";
import Warning from "./Warning";
import { useNavigate } from "react-router-dom";

type CartProps = {
  showCart: boolean;
  closeCart: () => void;
};

const Cart = ({ showCart, closeCart }: CartProps) => {
  const [showWarning, setShowWarning] = useState(false);

  const cartProducts = useSelector(selectCartProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const formatedPrice = formatPrice(totalPrice);
  const navigate = useNavigate();

  const onCheckoutClick = () => {
    navigate("/checkout");
    closeCart();
  };

  return (
    <AnimatePresence>
      {showCart && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.cart}
        >
          <Warning showWarning={showWarning} setShowWarning={setShowWarning} />

          <header className={styles.cart__header}>
            <h4>CART ({cartProducts.length})</h4>
            {!!cartProducts.length && (
              <button onClick={() => setShowWarning(true)}>Remove all</button>
            )}
          </header>
          {cartProducts.length ? (
            <CartList />
          ) : (
            <p className={styles.cart__message}>Your Cart is Empty</p>
          )}
          <div className={styles.total}>
            <span className={styles.total__info}>TOTAL</span>
            <span className={styles.total__amount}>$ {formatedPrice}</span>
          </div>
          <button
            onClick={onCheckoutClick}
            disabled={!cartProducts.length}
            className={styles.cart__checkout}
          >
            CHECKOUT
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Cart;
