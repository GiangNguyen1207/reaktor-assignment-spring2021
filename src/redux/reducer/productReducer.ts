import {
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY_SUCCESS,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  SEARCH_PRODUCT_SUCCESS,
  ProductActions,
  ProductState,
  Product,
} from '../type'

const initialState: ProductState = {
  jackets: [],
  shirts: [],
  accessories: [],
  availability: {},
  notification: null,
  searchedProducts: [],
}

export function product(
  state: ProductState = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      const products = action.payload
      if (products.map((p: Product) => p.type).includes('jackets')) {
        return {
          ...state,
          jackets: action.payload,
        }
      }
      if (products.map((p: Product) => p.type).includes('shirts')) {
        return {
          ...state,
          shirts: action.payload,
        }
      }

      return {
        ...state,
        accessories: action.payload,
      }

    case GET_AVAILABILITY_SUCCESS:
      return {
        ...state,
        availability: { ...state.availability, ...action.payload },
      }

    case SHOW_NOTIFICATION:
      return {
        ...state,
        notification: action.payload,
      }

    case HIDE_NOTIFICATION:
      return {
        ...state,
        notification: null,
      }

    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        searchedProducts: action.payload,
      }

    default:
      return state
  }
}
