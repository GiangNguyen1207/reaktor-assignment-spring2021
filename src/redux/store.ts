import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "redux/saga";
import rootReducer, { RootState } from "./reducer";

const initialState: RootState = {
  product: {
    jackets: undefined,
    shirts: undefined,
    accessories: undefined,
    availability: [],
  },
};

export default function makeStore() {
  /*let initialState;
  const loadedState = localStorage.getItem('state')

  if(loadedState !== null) {
    initialState = JSON.parse(loadedState)
  } else initialState = initialState*/

  const sagaMiddleware = createSagaMiddleware();
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
