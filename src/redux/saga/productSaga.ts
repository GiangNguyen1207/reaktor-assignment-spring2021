import { takeEvery, put, call, fork } from "redux-saga/effects";

import API from "services/api";
import { getProductSuccess } from "redux/actions";
import { GET_PRODUCTS, GetProductsAction } from "redux/type";

function* getProducts() {
  yield takeEvery(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      console.log("in");
      const category = action.payload;
      const products = yield call(API.getProduct, category);
      yield put(getProductSuccess(products));
    } catch (error) {
      console.log(error);
    }
  });
}

export default [getProducts].map(fork);
