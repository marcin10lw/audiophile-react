import AnimationWrapper from "../../../components/AnimationWrapper";
import styles from "./index.module.scss";

const GearSection = () => {
  return (
    <section className={styles.section}>
      <AnimationWrapper>
        <article className={styles.article}>
          <h2 className={styles.article__title}>
            BRINGING YOU THE <strong>BEST</strong> AUDIO GEAR
          </h2>
          <p className={styles.article__description}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </article>
      </AnimationWrapper>
      <img className={styles.section__image} alt="best gear" />
    </section>
  );
};

export default GearSection;
