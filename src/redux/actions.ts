import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY_SUCCESS,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  ProductActions,
  Product,
  Availability,
} from './type'

export function getProducts(category: string): ProductActions {
  return {
    type: GET_PRODUCTS,
    payload: category,
  }
}

export function getProductSuccess(products: Product[]): ProductActions {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  }
}

export function getAvailabilitySuccess(
  manufacturer: string,
  availability: Availability[]
): ProductActions {
  return {
    type: GET_AVAILABILITY_SUCCESS,
    payload: {
      manufacturer,
      availability,
    },
  }
}

export function showNotification(noti: string): ProductActions {
  return {
    type: SHOW_NOTIFICATION,
    payload: noti,
  }
}

export function hideNotification(): ProductActions {
  return {
    type: HIDE_NOTIFICATION,
  }
}
