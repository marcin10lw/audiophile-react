import { useState } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import {
  selectBoughtProducts,
  selectGrandTotalPrice,
} from "store/boughtProductsSlice";
import { formatPrice } from "utils/formatPrice";
import CartItem from "common/CartItem";
import confirmationIcon from "./icon-order-confirmation.svg";
import styles from "./index.module.scss";

type ConfirmationProps = {
  showConfirmation: boolean;
  onClick: () => void;
};

const Confirmation = ({ showConfirmation, onClick }: ConfirmationProps) => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const grandTotalPrice = useSelector(selectGrandTotalPrice);
  const boughtProducts = useSelector(selectBoughtProducts);
  const renderedCartProducts = showAllProducts
    ? boughtProducts
    : [boughtProducts[0]];

  return (
    <AnimatePresence>
      {showConfirmation && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.confirmation}
        >
          <img src={confirmationIcon} alt="" />
          <h3 className={styles.confirmation__heading}>
            THANK YOU <br /> FOR YOUR ORDER
          </h3>
          <p className={styles.confirmation__description}>
            You will receive an email confirmation shortly.
          </p>
          <div className={styles.container}>
            <div className={styles.items}>
              <ul className={styles.items__list}>
                {renderedCartProducts.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    location="checkout"
                  />
                ))}
              </ul>
              {boughtProducts.length > 1 && (
                <button
                  onClick={() =>
                    setShowAllProducts((showAllProducts) => !showAllProducts)
                  }
                  className={styles.items__button}
                >
                  {showAllProducts
                    ? "View less"
                    : `and ${boughtProducts.length - 1} other item(s)`}
                </button>
              )}
            </div>
            <div className={styles.confirmation__grandTotal}>
              <div className={styles}>
                <h4>GRAND TOTAL</h4>
                <p>$ {formatPrice(grandTotalPrice)}</p>
              </div>
            </div>
          </div>
          <button onClick={onClick} className={styles.confirmation__button}>
            BACK TO HOME
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Confirmation;
