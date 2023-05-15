import { takeEvery, select, call } from "redux-saga/effects";
import { CartProduct, selectCartProducts, selectTotalPrice } from "./cartSlice";
import { saveCartValueToLocalStorage } from "./cartValuesLocalStorage";

function* saveCartProductsToLocalStorageHnadler() {
  const products: CartProduct[] = yield select(selectCartProducts);
  const totalPrice: number = yield select(selectTotalPrice);
  yield call(saveCartValueToLocalStorage, "cartProducts", products);
  yield call(saveCartValueToLocalStorage, "totalPrice", totalPrice);
}

export function* cartSaga() {
  yield takeEvery("*", saveCartProductsToLocalStorageHnadler);
}
