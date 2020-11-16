import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from 'redux/saga'
import rootReducer, { RootState } from './reducer'

const initialState: RootState = {
  product: {
    jackets: [],
    shirts: [],
    accessories: [],
    availability: {},
    notification: null,
    searchedProducts: null,
    isLoading: false,
  },
}

export default function makeStore() {
  const sagaMiddleware = createSagaMiddleware()
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  sagaMiddleware.run(rootSaga)

  return store
}
