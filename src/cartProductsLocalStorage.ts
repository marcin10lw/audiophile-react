import { CartProduct } from "./cartSlice";

const localStorageKey = "cartProducts";

export const getCartProductsFromLocalStorage = () => {
  const localStorageCartProducts = localStorage.getItem(localStorageKey);

  if (!localStorageCartProducts) return [];

  return JSON.parse(localStorageCartProducts);
};

export const saveCartProductsToLocalStorage = (cartProducts: CartProduct[]) => {
  localStorage.setItem(localStorageKey, JSON.stringify(cartProducts));
};
