import {
  GET_PRODUCTS_SUCCESS,
  ProductActions,
  ProductState,
  Product,
} from "../type";

const initialState: ProductState = {
  jackets: undefined,
  shirts: undefined,
  accessories: undefined,
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

    default:
      return state;
  }
}
