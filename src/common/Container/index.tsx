import { PropsWithChildren } from "react";

import styles from "./index.module.scss";

type ContainerProps = PropsWithChildren<{ wide?: boolean }>;

const Container = ({ children, wide }: ContainerProps) => {
  return (
    <div className={wide ? styles["container--wide"] : styles.container}>
      {children}
    </div>
  );
};

export default Container;
