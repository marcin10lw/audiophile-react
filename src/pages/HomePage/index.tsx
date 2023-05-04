import { useSelector } from "react-redux";
import CategoryLinks from "../../components/CategoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";
import ProductsSection from "./ProductsSection";
import { selectProducts } from "../../productsSlice";
import GearSection from "../../components/GearSection";

const HomePage = () => {
  const products = useSelector(selectProducts);

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
