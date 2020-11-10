import { takeLatest, put, call, fork, select } from 'redux-saga/effects'

import API from 'services/api'
import {
  getProductSuccess,
  getAvailabilitySuccess,
  showNotification,
} from 'redux/actions'
import { GET_PRODUCTS, GetProductsAction, Product } from 'redux/type'
import { RootState } from 'redux/reducer'

function* showError(error: any) {
  const message = error.response.data.message || error.message
  yield put(showNotification(message))
}

function* getProducts() {
  yield takeLatest(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      const category = action.payload
      //axios.defaults.headers.common['x-force-error-mode'] = 'all'
      const products: Product[] = yield call(API.getProduct, category)

      yield put(getProductSuccess(products))

      for (const product of products) {
        yield getAvailability(product.manufacturer)
      }
    } catch (error) {
      yield showError(error)
    }
  })
}

function* getAvailability(manufacturer: string) {
  try {
    const state: RootState = yield select()
    const localMan = state.product.availability.map((man) => man.manufacturer)
    const found = localMan.find((man) => man === manufacturer)
    if (!found) {
      const { response } = yield call(API.getManufacturer, manufacturer)
      yield put(getAvailabilitySuccess(manufacturer, response))
    }
  } catch (error) {
    yield showError(error)
  }
}

export default [getProducts].map(fork)
