import { takeEvery, put, call, fork } from "redux-saga/effects";

import API from "services/api";
import { getProductSuccess, getAvailabilitySuccess } from "redux/actions";
import {
  GET_PRODUCTS,
  GET_AVAILABILITY,
  GetProductsAction,
  GetAvailabilityAction,
} from "redux/type";

function* getProducts() {
  yield takeEvery(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      const category = action.payload;
      const products = yield call(API.getProduct, category);
      yield put(getProductSuccess(products));
    } catch (error) {
      console.log(error);
    }
  });
}

function* getAvailability() {
  yield takeEvery(GET_AVAILABILITY, function* (action: GetAvailabilityAction) {
    try {
      const { productId, manufacturer } = action.payload;
      const { response } = yield call(API.getManufacturer, manufacturer);
      yield put(getAvailabilitySuccess(productId, response));
    } catch (error) {
      console.log(error);
    }
  });
}

export default [getProducts, getAvailability].map(fork);
