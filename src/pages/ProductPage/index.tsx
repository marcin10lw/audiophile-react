import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../getProducts";
import Loader from "../../components/Loader";
import Container from "../../components/Container";
import CategoryLinks from "../../components/CategoryLinks";
import GearSection from "../../components/GearSection";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";
import ProductInfo from "./ProductInfo";
import GoBack from "./GoBack";
import Gallery from "./Gallery";

const ProductPage = () => {
  const { status, data } = useQuery(["products"], getProducts);
  const { name } = useParams();
  const product = data?.find((product) => product.slug === name);

  if (status === "loading") return <Loader />;

  return (
    <>
      {product && (
        <Container wide={true}>
          <Container>
            <GoBack />
            <Product product={product} location="productPage" />
            <ProductInfo
              features={product.features}
              included={product.includes}
            />
            <Gallery gallery={product.gallery} />
            <nav>
              <CategoryLinks />
            </nav>
            <GearSection />
          </Container>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
