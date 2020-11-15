import { takeLatest, put, call, fork, select } from 'redux-saga/effects'
import _orderBy from 'lodash/orderBy'

import API from 'services/api'
import {
  getProductSuccess,
  getAvailabilitySuccess,
  showNotification,
  searchProductSuccess,
} from 'redux/actions'
import {
  GET_PRODUCTS,
  SEARCH_PRODUCT,
  GetProductsAction,
  Product,
  Availability,
  AvailabilityData,
  SearchProduct,
} from 'redux/type'
import { RootState } from 'redux/reducer'
import Categories from 'constants/Categories'

function* showError(error: any) {
  if (!error.response.data) {
    yield put(showNotification('Loading data failed. Please reload the page.'))
  }
  const message = error.response.data.message || error.message
  yield put(showNotification(message))
}

function* getProducts() {
  yield takeLatest(GET_PRODUCTS, function* (action: GetProductsAction) {
    try {
      const category = action.payload
      const products: Product[] = yield call(API.getProduct, category)

      const sortedProducts: Product[] = _orderBy(products, ['name'], ['asc'])
      yield put(getProductSuccess(sortedProducts))

      const manufacturerList = Array.from(
        new Set(products.map((p) => p.manufacturer))
      )

      for (const manufacturer of manufacturerList) {
        yield getAvailability(manufacturer)
      }
    } catch (error) {
      yield showError(error)
    }
  })
}

function* getAvailability(manufacturer: string) {
  try {
    const state: RootState = yield select()
    if (!state.product.availability[manufacturer]) {
      const { response } = yield call(API.getManufacturer, manufacturer)

      const availability: Availability = {}
      const availabilityData: AvailabilityData = {}
      for (const res of response) {
        availability[res.id.toLowerCase()] = res.DATAPAYLOAD
      }
      availabilityData[manufacturer] = availability

      yield put(getAvailabilitySuccess(availabilityData))
    }
  } catch (error) {
    yield showError(error)
  }
}

function* searchProduct() {
  yield takeLatest(SEARCH_PRODUCT, function* (action: SearchProduct) {
    const { category, input } = action.payload
    let searchedProducts: Product[] = []
    const state: RootState = yield select()
    const { pJackets, pShirts } = Categories
    if (category === pJackets) {
      searchedProducts = state.product.jackets.filter((p) =>
        p.name.toLowerCase().includes(input.toLowerCase())
      )
    } else if (category === pShirts) {
      searchedProducts = state.product.jackets.filter((p) =>
        p.name.toLowerCase().includes(input.toLowerCase())
      )
    } else {
      searchedProducts = state.product.jackets.filter((p) =>
        p.name.toLowerCase().includes(input.toLowerCase())
      )
    }
    yield put(searchProductSuccess(searchedProducts))
  })
}

export default [getProducts, searchProduct].map(fork)
