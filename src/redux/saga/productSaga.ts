import { takeEvery, put, call, fork, select } from 'redux-saga/effects'

import API from 'services/api'
import {
  getProductSuccess,
  getAvailabilitySuccess,
  showNotification,
} from 'redux/actions'
import {
  GET_PRODUCTS,
  SHOW_NOTIFICATION,
  GetProductsAction,
  Product,
} from 'redux/type'
import { RootState } from 'redux/reducer'

function* showError(error: any) {
  yield takeEvery(SHOW_NOTIFICATION, function* () {
    const message = error.response.data.message || error.message
    yield put(showNotification(message))
  })
}

function* getProducts() {
  yield takeEvery(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      const category = action.payload
      const state: RootState = yield select()
      const localMan = state.product.availability.map((man) => man.manufacturer)
      const products: Product[] = yield call(API.getProduct, category)

      yield put(getProductSuccess(products))

      const manufacturerList = Array.from(
        new Set(products.map((p) => p.manufacturer))
      )
      for (const manufacturer of manufacturerList) {
        if (!localMan.includes(manufacturer)) {
          yield getAvailability(manufacturer)
        }
      }
    } catch (error) {
      yield showError(error)
    }
  })
}

function* getAvailability(manufacturer: string) {
  try {
    const { response } = yield call(API.getManufacturer, manufacturer)

    yield put(getAvailabilitySuccess(manufacturer, response))
  } catch (error) {
    yield showError(error)
  }
}

export default [getProducts, getAvailability].map(fork)
