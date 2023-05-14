import { motion } from "framer-motion";
import styles from "./index.module.scss";
import { useDispatch } from "react-redux";
import { removeAllProductsFromCart } from "../../../cartSlice";

type WarningProps = {
  showWarning: boolean;
  setShowWarning: React.Dispatch<React.SetStateAction<boolean>>;
};

const Warning = ({ showWarning, setShowWarning }: WarningProps) => {
  const dispatch = useDispatch();

  const onRemoveAllProductsFromCart = () => {
    dispatch(removeAllProductsFromCart());
    setShowWarning(false);
  };

  return (
    <>
      {showWarning && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.cartBackdrop}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={styles.warning}
          >
            <p>Are you sure?</p>
            <div className={styles.buttons}>
              <button
                onClick={onRemoveAllProductsFromCart}
                className={styles.buttons__delete}
              >
                Yes
              </button>
              <button
                onClick={() => setShowWarning(false)}
                className={styles.buttons__cancel}
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Warning;
