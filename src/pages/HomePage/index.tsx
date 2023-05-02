import { useSelector } from "react-redux";
import CathegoryLinks from "../../components/CathegoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";
import ProductsSection from "./ProductsSection";
import { selectProducts } from "../../productsSlice";
import GearSection from "./GearSection";

const HomePage = () => {
  const products = useSelector(selectProducts);

  return (
    <main>
      <HomeHero />
      <Container wide={true}>
        <Container>
          <nav>
            <CathegoryLinks />
          </nav>
          <ProductsSection />
          <GearSection />
        </Container>
      </Container>
    </main>
  );
};

export default HomePage;
