import { useSelector } from "react-redux";
import Container from "../../../components/Container";
import { Product, selectProductsByName } from "../../../productsSlice";
import { RootState } from "../../../store";
import styles from "./index.module.scss";

const HomeHero = () => {
  return (
    <>
      <section className={styles.heroSection}>
        <Container>
          <div className={styles.wrapper}>
            <div className={styles.heroImage} />
            <article className={styles.heroArticle}>
              <div className={styles.heroArticle__info}>NEW PRODUCT</div>

              <h2 className={styles.heroArticle__name}>
                XX99 MARK II HEADPHONES
              </h2>
              <p className={styles.heroArticle__description}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <button className={styles.heroArticle__button}>
                SEE PRODUCT
              </button>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HomeHero;
