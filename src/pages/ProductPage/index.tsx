import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../getProducts";
import Loader from "../../common/Loader";
import Container from "../../common/Container";
import CategoryLinks from "../../common/CategoryLinks";
import GearSection from "../../common/GearSection";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import GoBack from "./GoBack";
import Gallery from "./Gallery";
import Recommended from "./Recommended";
import DetailedProduct from "./DetailedProduct";

const ProductPage = () => {
  const { status, data } = useQuery(["products"], getProducts);
  const { name } = useParams();

  const product = data?.find((product) => product.slug === name);

  if (status === "loading") return <Loader />;
  return (
    <>
      {product && (
        <>
          <Container wide={true}>
            <Container>
              <GoBack />
              <div key={name}>
                <DetailedProduct product={product} />
              </div>
              <ProductInfo
                features={product.features}
                included={product.includes}
              />
              <Gallery gallery={product.gallery} />
              <Recommended otherProducts={product.others} />
              <nav>
                <CategoryLinks />
              </nav>
              <GearSection />
            </Container>
          </Container>
        </>
      )}
    </>
  );
};

export default ProductPage;
