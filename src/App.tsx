import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useEffect } from "react";
import Footer from "./components/Footer";
import CategoryPage from "./pages/CategoryPage";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "./getProducts";

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
        </Routes>
      </main>
      {status === "success" && <Footer />}
    </>
  );
}

export default App;
