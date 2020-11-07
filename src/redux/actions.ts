import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY,
  GET_AVAILABILITY_SUCCESS,
  DECREASE_PRODUCT_AVAILABILITY,
  DECREASE_PRODUCT_AVAILABILITY_SUCCESS,
  ProductActions,
  Product,
  Availability,
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
  availability: Availability[]
): ProductActions {
  return {
    type: GET_AVAILABILITY_SUCCESS,
    payload: availability,
  };
}

export function decreaseProductAvailability(
  availability: Availability[],
  productId?: string
): ProductActions {
  return {
    type: DECREASE_PRODUCT_AVAILABILITY,
    payload: {
      productId,
      availability,
    },
  };
}

export function decreaseProductAvailabilitySuccess(
  availability: Availability[]
): ProductActions {
  return {
    type: DECREASE_PRODUCT_AVAILABILITY_SUCCESS,
    payload: availability,
  };
}
