import { useParams } from "react-router-dom";
import CategoryLinks from "../../components/CategoryLinks";
import Container from "../../components/Container";
import GearSection from "../../components/GearSection";
import CategoryHeader from "./CategoryHeader";
import { useSelector } from "react-redux";
import { selectProductsStatus } from "../../productsSlice";
import Loader from "../../components/Loader";

const CategoryPage = () => {
  const { name } = useParams();
  const status = useSelector(selectProductsStatus);

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "success" && (
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
      )}
    </>
  );
};

export default CategoryPage;
