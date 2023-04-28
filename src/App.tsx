import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "./productsSlice";

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
