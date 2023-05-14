import { useState } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  selectCartProducts,
  selectTotalAmount,
  selectTotalPrice,
} from "../../../../cartSlice";
import { ProductType } from "../../../../fakeAPIResponseTypes";

type AddProductProps = {
  product: ProductType;
};

const AddProduct = ({ product }: AddProductProps) => {
  const [productAmount, setProductAmount] = useState(1);
  const cartProducts = useSelector(selectCartProducts);
  const totalAmount = useSelector(selectTotalAmount);
  const totalPrice = useSelector(selectTotalPrice);
  console.log(cartProducts, totalAmount, totalPrice);

  const dispatch = useDispatch();

  const onAddProduct = () => {
    dispatch(
      addProduct({
        image: product.image.mobile,
        name: product.name,
        price: product.price,
        amount: productAmount,
        id: product.id,
      })
    );

    setProductAmount(1);
  };

  return (
    <div className={styles.addProduct}>
      <div className={styles.changeAmount}>
        <button
          onClick={() => {
            if (productAmount === 1) return;
            setProductAmount((amount) => amount - 1);
          }}
          disabled={productAmount === 1}
          className={styles.changeAmount__button}
        >
          -
        </button>
        <span className={styles.changeAmount__amount}>{productAmount}</span>
        <button
          onClick={() => setProductAmount((amount) => amount + 1)}
          className={styles.changeAmount__button}
        >
          +
        </button>
      </div>
      <button onClick={onAddProduct} className={styles.addProduct__button}>
        ADD TO CART
      </button>
    </div>
  );
};

export default AddProduct;
