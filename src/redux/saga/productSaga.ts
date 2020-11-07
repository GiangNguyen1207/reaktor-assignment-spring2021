import { takeEvery, put, call, fork } from "redux-saga/effects";

import API from "services/api";
import {
  getProductSuccess,
  getAvailabilitySuccess,
  decreaseProductAvailabilitySuccess,
} from "redux/actions";
import {
  GET_PRODUCTS,
  GET_AVAILABILITY,
  DECREASE_PRODUCT_AVAILABILITY,
  GetProductsAction,
  GetAvailabilityAction,
  DecreaseProductAvailability,
  Response,
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
      const res = yield response.filter(
        (res: Response) => res.id.toLowerCase() === productId
      );
      yield put(getAvailabilitySuccess(res));
    } catch (error) {
      console.log(error);
    }
  });
}

function* decreaseProductAvailability() {
  yield takeEvery(DECREASE_PRODUCT_AVAILABILITY, function* (
    action: DecreaseProductAvailability
  ) {
    try {
      const { productId, availability } = action.payload;
      const foundProduct = availability.find(
        (p) => p.id.toLowerCase() === productId
      );
      if (foundProduct) {
        const arr = availability;
        const pos = availability.indexOf(foundProduct);
        arr.splice(pos, 1);
        yield put(decreaseProductAvailabilitySuccess(arr));
      }
    } catch (error) {
      console.log(error);
    }
  });
}

export default [getProducts, getAvailability, decreaseProductAvailability].map(
  fork
);
