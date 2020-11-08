import {
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY_SUCCESS,
  DECREASE_PRODUCT_AVAILABILITY_SUCCESS,
  ProductActions,
  ProductState,
  Product,
  AvailabilityData,
} from '../type'

const initialState: ProductState = {
  jackets: [],
  shirts: [],
  accessories: [],
  availability: [],
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
      const avail: AvailabilityData[] = [
        {
          manufacturer: action.payload.manufacturer,
          data: action.payload.availability,
        },
      ]
      return {
        ...state,
        availability: [...state.availability, ...avail],
      }

    // case DECREASE_PRODUCT_AVAILABILITY_SUCCESS:
    //   return {
    //     ...state,
    //     availability: action.payload,
    //   }

    default:
      return state
  }
}
