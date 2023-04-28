import CathegoryLinks from "../../components/CathegoryLinks";
import Container from "../../components/Container";
import HomeHero from "./HomeHero";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <Container wide={true}>
        <Container>
          <CathegoryLinks />
        </Container>
      </Container>
    </main>
  );
};

export default HomePage;
