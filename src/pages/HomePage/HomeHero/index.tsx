import { motion } from "framer-motion";
import Container from "../../../components/Container";
import styles from "./index.module.scss";
import { Link } from "react-router-dom";

const articleVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4,
      duration: 1,
    },
  },
};

const HomeHero = () => {
  return (
    <section className={styles.heroSection}>
      <Container>
        <div className={styles.wrapper}>
          <motion.div className={styles.heroImage} />
          <motion.article
            variants={articleVariants}
            initial="hidden"
            animate="visible"
            className={styles.heroArticle}
          >
            <div className={styles.heroArticle__info}>NEW PRODUCT</div>

            <h1 className={styles.heroArticle__name}>
              XX99 MARK II HEADPHONES
            </h1>
            <p className={styles.heroArticle__description}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              to="/headphones/xx99-mark-two-headphones"
              className={styles.heroArticle__link}
            >
              SEE PRODUCT
            </Link>
          </motion.article>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
