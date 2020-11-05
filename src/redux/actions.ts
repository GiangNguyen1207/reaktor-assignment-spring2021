import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_JACKETS_SUCCESS,
  GET_SHIRTS_SUCCESS,
  GET_ACCESSORIES_SUCCESS,
  ProductActions,
  Product,
} from "./type";

export function getProducts(category: string): ProductActions {
  return {
    type: GET_PRODUCTS,
    payload: category,
  };
}

export function getJacketsSuccess(products: Product[]): ProductActions {
  return {
    type: GET_JACKETS_SUCCESS,
    payload: products,
  };
}

export function getShirtSuccess(products: Product[]): ProductActions {
  return {
    type: GET_SHIRTS_SUCCESS,
    payload: products,
  };
}

export function getAccessoriesSuccess(products: Product[]): ProductActions {
  return {
    type: GET_ACCESSORIES_SUCCESS,
    payload: products,
  };
}

export function getProductSuccess(products: Product[]): ProductActions {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}
