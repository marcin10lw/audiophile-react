import styles from "./index.module.scss";

const CategoryHeader = ({ name }: { name?: string }) => {
  return (
    <header className={styles.header}>
      <h1>{name?.toLocaleUpperCase()}</h1>
    </header>
  );
};

export default CategoryHeader;
