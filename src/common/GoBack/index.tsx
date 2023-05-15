import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const GoBack = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.goBack}>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default GoBack;
