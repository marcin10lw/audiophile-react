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

      state.totalPrice += amount * price;
    },
    decreaseAmount: (state, { payload: id }: { payload: number }) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingProduct?.amount === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== id
        );
      } else {
        existingProduct!.amount -= 1;
      }

      state.totalPrice -= existingProduct!.price;
    },
    increaseAmount: (state, { payload: id }: { payload: number }) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      existingProduct!.amount += 1;
      state.totalPrice += existingProduct!.price;
    },
  },
});

export const { addProduct, decreaseAmount, increaseAmount } = cartSlice.actions;

const selectCartState = (state: RootState) => state.cart;

export const selectCartProducts = (state: RootState) =>
  selectCartState(state).cartProducts;

export const selectTotalAmount = (state: RootState) =>
  selectCartState(state).totalAmount;

export const selectTotalPrice = (state: RootState) =>
  selectCartState(state).totalPrice;

export default cartSlice.reducer;
