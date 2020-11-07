import {
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY_SUCCESS,
  DECREASE_PRODUCT_AVAILABILITY_SUCCESS,
  ProductActions,
  ProductState,
  Product,
} from "../type";

const initialState: ProductState = {
  jackets: undefined,
  shirts: undefined,
  accessories: undefined,
  availability: [],
};

export function product(
  state: ProductState = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      const products = action.payload;

      if (products.map((p: Product) => p.type).includes("jackets")) {
        return {
          ...state,
          jackets: action.payload,
        };
      }

      if (products.map((p: Product) => p.type).includes("shirts")) {
        return {
          ...state,
          shirts: action.payload,
        };
      }

      return {
        ...state,
        accessories: action.payload,
      };

    case GET_AVAILABILITY_SUCCESS:
      return {
        ...state,
        availability: [...state.availability, ...action.payload],
      };

    case DECREASE_PRODUCT_AVAILABILITY_SUCCESS:
      return {
        ...state,
        availability: action.payload,
      };

    default:
      return state;
  }
}
