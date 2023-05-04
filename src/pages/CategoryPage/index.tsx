import { useParams } from "react-router-dom";
import CategoryLinks from "../../components/CategoryLinks";
import Container from "../../components/Container";
import GearSection from "../../components/GearSection";
import CategoryHeader from "./CategoryHeader";

const CategoryPage = () => {
  const { name } = useParams();

  return (
    <>
      <CategoryHeader name={name} />
      <Container wide={true}>
        <Container>
          <nav>
            <CategoryLinks />
          </nav>
          <GearSection />
        </Container>
      </Container>
    </>
  );
};

export default CategoryPage;
