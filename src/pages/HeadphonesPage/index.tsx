import CathegoryLinks from "../../components/CathegoryLinks";
import Container from "../../components/Container";
import GearSection from "../../components/GearSection";

const HeadphonesPage = () => {
  return (
    <>
      <Container wide={true}>
        <Container>
          <nav>
            <CathegoryLinks />
          </nav>
          <GearSection />
        </Container>
      </Container>
    </>
  );
};

export default HeadphonesPage;
