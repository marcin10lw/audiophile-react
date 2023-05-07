import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
