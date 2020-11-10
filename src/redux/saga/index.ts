import { all } from 'redux-saga/effects'

import ProductSaga from './productSaga'

export default function* rootSaga() {
  yield all([...ProductSaga])
}
