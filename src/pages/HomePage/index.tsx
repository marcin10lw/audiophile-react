import { useSelector } from "react-redux";
import CathegoryLinks from "../../components/CathegoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";
import ProductsSection from "./ProductsSection";
import { selectProducts } from "../../productsSlice";

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
        </Container>
      </Container>
    </main>
  );
};

export default HomePage;
