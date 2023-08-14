import { createSlice } from "@reduxjs/toolkit";

import { CartProduct } from "./cartSlice";
import { RootState } from "./store";

type BoughtProduct = CartProduct;

type InitialStateType = {
  boughtProducts: BoughtProduct[];
  grandTotalPrice: number;
};

const boughtProductsSlice = createSlice({
  name: "boughtProducts",
  initialState: {
    boughtProducts: [],
    grandTotalPrice: 0,
  } as InitialStateType,
  reducers: {
    addBoughtProducts: (state, { payload: products }) => {
      state.boughtProducts = products;
    },
    setGrandTotalPrice: (state, { payload: grandTotalPrice }) => {
      state.grandTotalPrice = grandTotalPrice;
    },
  },
});

export const { addBoughtProducts, setGrandTotalPrice } =
  boughtProductsSlice.actions;

const selectBoughtProductsState = (state: RootState) => state.boughtProducts;

export const selectBoughtProducts = (state: RootState) =>
  selectBoughtProductsState(state).boughtProducts;

export const selectGrandTotalPrice = (state: RootState) =>
  selectBoughtProductsState(state).grandTotalPrice;

export default boughtProductsSlice.reducer;
