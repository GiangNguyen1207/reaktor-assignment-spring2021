import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY,
  GET_AVAILABILITY_SUCCESS,
  ProductActions,
  Product,
  Response,
} from "./type";

export function getProducts(category: string): ProductActions {
  return {
    type: GET_PRODUCTS,
    payload: category,
  };
}

export function getProductSuccess(products: Product[]): ProductActions {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getAvailability(
  productId: string,
  manufacturer: string
): ProductActions {
  return {
    type: GET_AVAILABILITY,
    payload: {
      productId,
      manufacturer,
    },
  };
}

export function getAvailabilitySuccess(
  productId: string,
  response: Response[]
): ProductActions {
  return {
    type: GET_AVAILABILITY_SUCCESS,
    payload: {
      productId,
      response,
    },
  };
}
