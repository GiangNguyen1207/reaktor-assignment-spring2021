export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_AVAILABILITY_SUCCESS = 'GET_AVAILABILITY_SUCCESS'
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'
export const SEARCH_PRODUCT = 'SEARCH_PRODUCT'
export const SEARCH_PRODUCT_SUCCESS = 'SEARCH_PRODUCT_SUCCESS'
export const REMOVE_SEARCHED_PRODUCT = 'REMOVE_SEARCHED_PRODUCT'

export type Product = {
  id: string
  type: string
  name: string
  color: string[]
  price: number
  manufacturer: string
}

export type Availability = {
  [id: string]: string
}

export type AvailabilityData = {
  [manufacturer: string]: Availability
}

export type TimeOut = {
  category: string
  startingTime: number
}

export type GetProductsAction = {
  type: typeof GET_PRODUCTS
  payload: string
}

export type GetProductSuccessAction = {
  type: typeof GET_PRODUCTS_SUCCESS
  payload: Product[]
}

export type GetAvailabilitySucess = {
  type: typeof GET_AVAILABILITY_SUCCESS
  payload: AvailabilityData
}

export type ShowNotification = {
  type: typeof SHOW_NOTIFICATION
  payload: string
}

export type HideNotificaiton = {
  type: typeof HIDE_NOTIFICATION
}

export type SearchProduct = {
  type: typeof SEARCH_PRODUCT
  payload: {
    category: string
    input: string
  }
}

export type SearchProductSuccess = {
  type: typeof SEARCH_PRODUCT_SUCCESS
  payload: Product[]
}

export type RemoveProduct = {
  type: typeof REMOVE_SEARCHED_PRODUCT
}

export type ProductActions =
  | GetProductSuccessAction
  | GetProductsAction
  | GetAvailabilitySucess
  | ShowNotification
  | HideNotificaiton
  | SearchProduct
  | SearchProductSuccess
  | RemoveProduct

export type ProductState = {
  jackets: Product[]
  shirts: Product[]
  accessories: Product[]
  availability: AvailabilityData
  notification: string | null
  searchedProducts: Product[] | null
}
