import { useSelector } from "react-redux";
import CategoryLinks from "../../components/CategoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";
import ProductsSection from "./ProductsSection";
import { selectProducts, selectProductsStatus } from "../../productsSlice";
import GearSection from "../../components/GearSection";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const HomePage = () => {
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "success" && (
        <>
          <HomeHero />
          <Container wide={true}>
            <Container>
              <nav>
                <CategoryLinks />
              </nav>
              <ProductsSection />
              <GearSection />
            </Container>
          </Container>
        </>
      )}
      {status === "error" && <Error />}
    </>
  );
};

export default HomePage;
