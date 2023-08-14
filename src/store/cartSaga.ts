import { takeEvery, select, call } from "redux-saga/effects";

import {
  CartProduct,
  selectCartProducts,
  selectTotalAmount,
  selectTotalPrice,
} from "./cartSlice";
import { saveCartValueToLocalStorage } from "./cartValuesLocalStorage";

function* saveCartProductsToLocalStorageHnadler() {
  const cartProducts: CartProduct[] = yield select(selectCartProducts);
  const totalPrice: number = yield select(selectTotalPrice);
  const totalAmount: number = yield select(selectTotalAmount);

  yield call(saveCartValueToLocalStorage, {
    cartProducts,
    totalPrice,
    totalAmount,
  });
}

export function* cartSaga() {
  yield takeEvery("*", saveCartProductsToLocalStorageHnadler);
}
