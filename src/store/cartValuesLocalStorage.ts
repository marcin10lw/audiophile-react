import { CartProduct } from "./cartSlice";

type LocalStorageValueType = {
  cartProducts: CartProduct[] | [];
  totalPrice: number;
};

export const getCartValueFromLocalStorage = () => {
  const localStorageCartProducts = localStorage.getItem("cart");

  if (!localStorageCartProducts) {
    return {
      cartProducts: [],
      totalPrice: 0,
    };
  }

  return JSON.parse(localStorageCartProducts) as LocalStorageValueType;
};

export const saveCartValueToLocalStorage = (value: {
  cartProducts: CartProduct[];
  totalPrice: number;
}) => {
  localStorage.setItem("cart", JSON.stringify(value));
};
