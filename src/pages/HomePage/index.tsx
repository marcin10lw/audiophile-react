import { useSelector } from "react-redux";
import CathegoryLinks from "../../components/CathegoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";
import { selectProductsStatus } from "../../productsSlice";

const HomePage = () => {
  const status = useSelector(selectProductsStatus);

  return (
    <>
      {status === "success" && (
        <main>
          <HomeHero />
          <Container wide={true}>
            <Container></Container>
          </Container>
        </main>
      )}
    </>
  );
};

export default HomePage;
