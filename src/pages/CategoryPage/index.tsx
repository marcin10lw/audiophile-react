import { useParams } from "react-router-dom";
import CategoryLinks from "../../components/CategoryLinks";
import Container from "../../components/Container";
import GearSection from "../../components/GearSection";
import CategoryHeader from "./CategoryHeader";
import Loader from "../../components/Loader";
import Products from "./Products";
import { getProducts } from "../../getProducts";
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
