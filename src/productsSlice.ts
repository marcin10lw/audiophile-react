import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type Product = {
  id: number;
  new: boolean;
  name: string;
  description: string;
  categoryImage: {
    desktop: string;
    tablet: string;
    mobile: string;
  };
  slug: string;
  category: string;
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
  },
  reducers: {
    fetchProducts: (state) => {
      state.status = "loading";
    },
    fetchProductsSuccess: (state, { payload: products }) => {
      state.products = products;
      state.status = "success";
    },
    fetchProductsError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchProducts, fetchProductsError, fetchProductsSuccess } =
  productsSlice.actions;

const selectProductsState = (state: RootState) => state.products;

export const selectProducts = (state: RootState): Product[] =>
  selectProductsState(state).products;

export const selectProductsByName = (
  state: RootState,
  name: string
): Product => {
  const products = selectProducts(state);
  const index = products.findIndex((product) => product.slug === name);
  return products[index];
};

export const selectProductsByCategory = (
  state: RootState,
  category: string | undefined
) => {
  const products = selectProducts(state);
  return products.filter((product) => product.category === category);
};

export const selectProductsStatus = (state: RootState) =>
  selectProductsState(state).status;

export default productsSlice.reducer;
