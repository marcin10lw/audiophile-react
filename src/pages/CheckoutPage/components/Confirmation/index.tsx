import { useSelector } from "react-redux";
import CartItem from "../../../../common/CartItem";
import confirmationIcon from "./icon-order-confirmation.svg";
import { selectCartProducts } from "../../../../store/cartSlice";
import styles from "./index.module.scss";
import { useState } from "react";

const Confirmation = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const cartProducts = useSelector(selectCartProducts);
  const renderedCartProducts = showAllProducts
    ? cartProducts
    : [cartProducts[0]];

  return (
    <section className={styles.confirmation}>
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
          {cartProducts.length > 1 && (
            <button
              onClick={() =>
                setShowAllProducts((showAllProducts) => !showAllProducts)
              }
              className={styles.items__button}
            >
              {showAllProducts
                ? "View less"
                : `and ${cartProducts.length - 1} other item(s)`}
            </button>
          )}
        </div>
        <div className={styles.confirmation__grandTotal}>
          <div className={styles}>
            <h4>GRAND TOTAL</h4>
            <p>$ 2,137</p>
          </div>
        </div>
      </div>
      <button className={styles.confirmation__button}>BACK TO HOME</button>
    </section>
  );
};

export default Confirmation;
