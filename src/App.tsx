import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "./productsSlice";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/category/:name" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
