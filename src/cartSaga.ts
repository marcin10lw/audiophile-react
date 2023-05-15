import { takeEvery, select, call } from "redux-saga/effects";
import { CartProduct, selectCartProducts } from "./cartSlice";
import { saveCartProductsToLocalStorage } from "./cartProductsLocalStorage";

function* saveCartProductsToLocalStorageHnadler() {
  const products: CartProduct[] = yield select(selectCartProducts);
  yield call(saveCartProductsToLocalStorage, products);
}

export function* cartSaga() {
  yield takeEvery("*", saveCartProductsToLocalStorageHnadler);
}
