import {
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY_SUCCESS,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
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
    // const avail: AvailabilityData[] = [
    //   {
    //     manufacturer: action.payload.manufacturer,
    //     data: action.payload.availability,
    //   },
    // ]
    // return {
    //   ...state,
    //   availability: [...state.availability, ...avail],
    // }

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

    default:
      return state
  }
}
