import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import { RootState } from "./store";
import { getCartValueFromLocalStorage } from "./cartValuesLocalStorage";

export type CartProduct = {
  id: number;
  image: string;
  name: string;
  price: number;
  amount: number;
  slug: string;
  short: string;
};

type InitialStateType = {
  cartProducts: CartProduct[];
  totalAmount: number;
  totalPrice: number;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: getCartValueFromLocalStorage().cartProducts,
    totalAmount: getCartValueFromLocalStorage().totalAmount,
    totalPrice: getCartValueFromLocalStorage().totalPrice,
  } as InitialStateType,
  reducers: {
    addProduct: (state, { payload }: { payload: CartProduct }) => {
      const { id, amount, price, name } = payload;
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.amount += amount;
        toast.info(`${name.toLocaleUpperCase()} amount was increased`);
      } else {
        state.cartProducts.push(payload);
        toast.success(`${name.toLocaleUpperCase()} was added to cart`);
      }

      state.totalPrice += amount * price;
      state.totalAmount += amount;
    },
    decreaseAmount: (state, { payload: id }: { payload: number }) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        if (existingProduct.amount === 1) {
          state.cartProducts = state.cartProducts.filter(
            (product) => product.id !== id
          );
          toast.info(
            `${existingProduct.name.toLocaleUpperCase()} was removed from cart`
          );
        } else {
          existingProduct.amount -= 1;
        }

        state.totalPrice -= existingProduct.price;
        state.totalAmount -= 1;
      }
    },
    increaseAmount: (state, { payload: id }: { payload: number }) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingProduct) {
        existingProduct.amount += 1;
        state.totalPrice += existingProduct.price;
        state.totalAmount += 1;
      }
    },
    removeAllProductsFromCart: (state) => {
      state.cartProducts = [];
      state.totalPrice = 0;
      state.totalAmount = 0;

      toast.info("Your cart is empty");
    },
  },
});

export const {
  addProduct,
  decreaseAmount,
  increaseAmount,
  removeAllProductsFromCart,
} = cartSlice.actions;

const selectCartState = (state: RootState) => state.cart;

export const selectCartProducts = (state: RootState) =>
  selectCartState(state).cartProducts;

export const selectTotalAmount = (state: RootState) =>
  selectCartState(state).totalAmount;

export const selectTotalPrice = (state: RootState) =>
  selectCartState(state).totalPrice;

export default cartSlice.reducer;
