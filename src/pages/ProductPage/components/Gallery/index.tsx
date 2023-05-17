import { useMediaQuery } from "@material-ui/core";
import { Image } from "../../../../fakeAPIResponseTypes";
import styles from "./index.module.scss";
import AnimationWrapper from "../../../../common/AnimationWrapper";

type GalleryProps = {
  gallery: {
    first: Image;
    second: Image;
    third: Image;
  };
};

const Gallery = ({ gallery }: GalleryProps) => {
  const matchesTablet = useMediaQuery("(max-width: 940px)");
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  const getImage = (number: "first" | "second" | "third") => {
    if (matchesMobile) {
      return gallery[`${number}`].mobile;
    }

    if (matchesTablet) {
      return gallery[`${number}`].tablet;
    }

    return gallery[`${number}`].desktop;
  };

  return (
    <AnimationWrapper>
      <section className={styles.gallery}>
        <img
          className={`${styles.gallery__image} ${styles["gallery__image--first"]}`}
          src={`${process.env.PUBLIC_URL}${getImage("first")}`}
          alt=""
          draggable={false}
        />
        <img
          className={`${styles.gallery__image} ${styles["gallery__image--second"]}`}
          src={`${process.env.PUBLIC_URL}${getImage("second")}`}
          alt=""
          draggable={false}
        />
        <img
          className={`${styles.gallery__image} ${styles["gallery__image--third"]}`}
          src={`${process.env.PUBLIC_URL}${getImage("third")}`}
          alt=""
          draggable={false}
        />
      </section>
    </AnimationWrapper>
  );
};

export default Gallery;
