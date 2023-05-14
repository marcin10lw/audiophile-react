import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { toast } from "react-toastify";

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
    },
    decreaseAmount: (state, { payload: id }: { payload: number }) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === id
      );

      if (existingProduct?.amount === 1) {
        state.cartProducts = state.cartProducts.filter(
          (product) => product.id !== id
        );
        toast.info(
          `${existingProduct.name.toLocaleUpperCase()} was removed from cart`
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
