export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_AVAILABILITY = "GET_AVAILABILITY";
export const GET_AVAILABILITY_SUCCESS = "GET_AVAILABILITY_SUCCESS";
export const DECREASE_PRODUCT_AVAILABILITY = "DECREASE_PRODUCT_AVAILABILITY";
export const DECREASE_PRODUCT_AVAILABILITY_SUCCESS =
  "DECREASE_PRODUCT_AVAILABILITY_SUCCESS";

export type Product = {
  id: string;
  type: string;
  name: string;
  color: string;
  price: number;
  manufacturer: string;
};

export type Response = {
  id: string;
  DATAPAYLOAD: string;
};

export type GetProductsAction = {
  type: typeof GET_PRODUCTS;
  payload: string;
};

export type GetProductSuccessAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: Product[];
};

export type GetAvailabilityAction = {
  type: typeof GET_AVAILABILITY;
  payload: {
    productId: string;
    manufacturer: string;
  };
};

export type GetAvailabilitySucess = {
  type: typeof GET_AVAILABILITY_SUCCESS;
  payload: Response[];
};

export type DecreaseProductAvailability = {
  type: typeof DECREASE_PRODUCT_AVAILABILITY;
  payload: {
    availability: Response[];
    productId?: string;
  };
};

export type DecreaseProductAvailabilitySuccess = {
  type: typeof DECREASE_PRODUCT_AVAILABILITY_SUCCESS;
  payload: Response[];
};

export type ProductActions =
  | GetProductSuccessAction
  | GetProductsAction
  | GetAvailabilityAction
  | GetAvailabilitySucess
  | DecreaseProductAvailability
  | DecreaseProductAvailabilitySuccess;

export type ProductState = {
  jackets?: Product[];
  shirts?: Product[];
  accessories?: Product[];
  availability: Response[];
};
