import CategoryLinks from "../../common/CategoryLinks";
import Container from "../../common/Container";
import HomeHero from "./components/HomeHero";
import ProductsSection from "./components/ProductsSection";
import GearSection from "../../common/GearSection";
import Loader from "../../common/Loader";
import Error from "../../common/Error";
import { getProducts } from "../../services/getProducts";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { status } = useQuery(["products"], getProducts);

  if (status === "loading") return <Loader />;
  if (status === "error") return <Error />;
  return (
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
  );
};

export default HomePage;
