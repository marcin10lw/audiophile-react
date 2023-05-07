import CategoryLinks from "../../components/CategoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";
import ProductsSection from "./ProductsSection";
import GearSection from "../../components/GearSection";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { getProducts } from "../../getProducts";
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
