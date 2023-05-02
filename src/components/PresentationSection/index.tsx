import styles from "./index.module.scss";

type PresentationSectionProps = {
  title: string;
  description: string;
  image: string;
};

const PresentationSection = ({
  title,
  description,
  image,
}: PresentationSectionProps) => {
  return (
    <section className={styles.section}>
      <article className={styles.article}>
        <h2 className={styles.article__title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </article>
      <img
        className={styles.section__image}
        draggable={false}
        src={image}
        alt={title}
      />
    </section>
  );
};

export default PresentationSection;
