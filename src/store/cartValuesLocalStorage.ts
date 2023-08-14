import { CartProduct } from "./cartSlice";

type LocalStorageValueType = {
  cartProducts: CartProduct[] | [];
  totalPrice: number;
  totalAmount: number;
};

export const getCartValueFromLocalStorage = (): LocalStorageValueType => {
  const localStorageCartProducts = localStorage.getItem("cart");

  if (!localStorageCartProducts) {
    return {
      cartProducts: [],
      totalPrice: 0,
      totalAmount: 0,
    };
  }

  return JSON.parse(localStorageCartProducts);
};

export const saveCartValueToLocalStorage = (value: {
  cartProducts: CartProduct[];
  totalPrice: number;
  totalAmount: number;
}) => {
  localStorage.setItem("cart", JSON.stringify(value));
};
