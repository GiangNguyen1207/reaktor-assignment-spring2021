export const GET_PRODUCTS = 'GET_PRODUCTS'
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
export const GET_AVAILABILITY_SUCCESS = 'GET_AVAILABILITY_SUCCESS'
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION'

export type Product = {
  id: string
  type: string
  name: string
  color: string
  price: number
  manufacturer: string
}

export type Availability = {
  id: string
  DATAPAYLOAD: string
}

export type AvailabilityData = {
  manufacturer: string
  data: Availability[]
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
  payload: {
    manufacturer: string
    availability: Availability[]
  }
}

export type ShowNotification = {
  type: typeof SHOW_NOTIFICATION
  payload: string
}

export type HideNotificaiton = {
  type: typeof HIDE_NOTIFICATION
}

export type ProductActions =
  | GetProductSuccessAction
  | GetProductsAction
  | GetAvailabilitySucess
  | ShowNotification
  | HideNotificaiton

export type ProductState = {
  jackets: Product[]
  shirts: Product[]
  accessories: Product[]
  availability: AvailabilityData[]
  notification: string | null
}
