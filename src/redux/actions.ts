import {
  GET_PRODUCTS,
  GET_PRODUCTS_SUCCESS,
  GET_AVAILABILITY_SUCCESS,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  ProductActions,
  Product,
  AvailabilityData,
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
  availabilityData: AvailabilityData
): ProductActions {
  return {
    type: GET_AVAILABILITY_SUCCESS,
    payload: availabilityData,
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
