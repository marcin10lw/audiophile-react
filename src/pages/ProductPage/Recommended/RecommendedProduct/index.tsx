import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { Image } from "../../../../fakeAPIResponseTypes";
import { useMediaQuery } from "@material-ui/core";

type RecommendedProductProps = {
  image: Image;
  name: string;
  slug: string;
};

const RecommendedProduct = ({ image, name, slug }: RecommendedProductProps) => {
  const matchesTablet = useMediaQuery("(max-width: 940px)");
  const matchesMobile = useMediaQuery("(max-width: 768px)");

  const getImage = () => {
    if (matchesMobile) {
      return image.mobile;
    }

    if (matchesTablet) {
      return image.tablet;
    }

    return image.desktop;
  };

  return (
    <article className={styles.recommendedProduct}>
      <img
        className={styles.recommendedProduct__image}
        draggable={false}
        src={`${process.env.PUBLIC_URL}${getImage()}`}
        alt={name}
      />
      <h3 className={styles.recommendedProduct__name}>
        {name.toLocaleUpperCase()}
      </h3>
      <Link className={styles.recommendedProduct__link} to={`/product/${slug}`}>
        SEE PRODUCT
      </Link>
    </article>
  );
};

export default RecommendedProduct;
