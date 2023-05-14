import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type CartProduct = {
  id: number;
  image: string;
  name: string;
  price: number;
  amount: number;
};

type InitialStateType = {
  cartProducts: CartProduct[];
  totalAmount: number;
  totalPrice: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalAmount: 0,
    totalPrice: 0,
  } as InitialStateType,
  reducers: {
    addProduct: (state, { payload }: { payload: CartProduct }) => {
      const { id, amount, price } = payload;
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.amount += amount;
      } else {
        state.cartProducts.push(payload);
      }

      state.totalAmount += amount;
      state.totalPrice += amount * price;
    },
  },
});

export const { addProduct } = cartSlice.actions;

const selectCartState = (state: RootState) => state.cart;

export const selectCartProducts = (state: RootState) =>
  selectCartState(state).cartProducts;

export const selectTotalAmount = (state: RootState) =>
  selectCartState(state).totalAmount;

export const selectTotalPrice = (state: RootState) =>
  selectCartState(state).totalPrice;

export default cartSlice.reducer;
