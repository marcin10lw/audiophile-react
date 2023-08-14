import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProducts } from "services/getProducts";
import Loader from "common/Loader";
import Container from "common/Container";
import CategoryLinks from "common/CategoryLinks";
import GearSection from "common/GearSection";
import ProductInfo from "./components/ProductInfo";
import GoBack from "common/GoBack";
import Gallery from "./components/Gallery";
import Recommended from "./components/Recommended";
import DetailedProduct from "./components/DetailedProduct";

const ProductPage = () => {
  const { status, data } = useQuery(["products"], getProducts);
  const { name } = useParams();

  const product = data?.find((product) => product.slug === name);

  if (status === "loading") return <Loader />;
  return (
    <>
      {product && (
        <>
          <Container key={name} wide={true}>
            <Container>
              <GoBack />
              <DetailedProduct product={product} />
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
