import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./common/Header";
import { useEffect } from "react";
import Footer from "./common/Footer";
import CategoryPage from "./pages/CategoryPage";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./getProducts";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const { status } = useQuery(["products"], getProducts);
  const { pathname } = useLocation();

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
          <Route path="/product/:name" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      {status === "success" && <Footer />}
    </>
  );
}

export default App;
