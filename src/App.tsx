import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProductsStatus } from "./productsSlice";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";

function App() {
  const dispatch = useDispatch();
  const status = useSelector(selectProductsStatus);
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
      {status === "success" && <Footer />}
    </>
  );
}

export default App;
