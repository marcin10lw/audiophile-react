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
import Recommended from "./Recommended";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const { status, data } = useQuery(["products"], getProducts);
  const [exampleStatus, setExampleStatus] = useState("idle");
  const { name } = useParams();
  const product = data?.find((product) => product.slug === name);

  useEffect(() => {
    setExampleStatus("loading");
    setTimeout(() => {
      setExampleStatus("success");
    }, 500);
  }, [name]);

  if (status === "loading" || exampleStatus === "loading") return <Loader />;

  return (
    <>
      {product && exampleStatus === "success" && (
        <Container wide={true}>
          <Container>
            <GoBack />
            <Product product={product} location="productPage" />
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
      )}
    </>
  );
};

export default ProductPage;
