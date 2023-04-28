import Container from "../../components/Container";
import HomeHero from "./HomeHero";

const HomePage = () => {
  return (
    <main>
      <HomeHero />
      <Container wide={true}>
        <Container></Container>
      </Container>
    </main>
  );
};

export default HomePage;
