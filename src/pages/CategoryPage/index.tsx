import { useParams } from "react-router-dom";
import CategoryLinks from "../../common/CategoryLinks";
import Container from "../../common/Container";
import GearSection from "../../common/GearSection";
import CategoryHeader from "./components/CategoryHeader";
import Loader from "../../common/Loader";
import Products from "./components/Products";
import { getProducts } from "../../services/getProducts";
import { useQuery } from "@tanstack/react-query";

const CategoryPage = () => {
  const { name } = useParams();
  const { status } = useQuery(["products"], getProducts);

  if (status === "loading") return <Loader />;
  return (
    <>
      <CategoryHeader name={name} />
      <Container wide={true}>
        <Container>
          <Products />
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
