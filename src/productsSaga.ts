import { takeLatest, delay, call, put } from "redux-saga/effects";
import {
  fetchProducts,
  fetchProductsError,
  fetchProductsSuccess,
} from "./productsSlice";
import { getProducts } from "./getProducts";
import { AxiosResponse } from "axios";

function* fetchProductsHandler() {
  yield delay(1000);
  try {
    const products: AxiosResponse = yield call(getProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsError());
  }
}

export function* productsSaga() {
  yield takeLatest(fetchProducts.type, fetchProductsHandler);
}
