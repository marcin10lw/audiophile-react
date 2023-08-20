import { BoughtProduct } from "store/boughtProductsSlice";

export const getTotalAmount = (boughtProducts: BoughtProduct[]) => {
  return boughtProducts.reduce((total, product) => {
    return total + product.amount;
  }, 0);
};
