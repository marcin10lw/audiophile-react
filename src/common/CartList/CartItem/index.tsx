import styles from "./index.module.scss";

const CartItem = () => {
  return (
    <li>
      <img />
      <div>
        <h5>XX99 MK II</h5>
        <div>$ 2,999</div>
      </div>
      <div>
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartItem;
