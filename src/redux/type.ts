export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_JACKETS_SUCCESS = "GET_PRODUCT_SUCCESS";
export const GET_SHIRTS_SUCCESS = "GET_SHIRTS_SUCCESS";
export const GET_ACCESSORIES_SUCCESS = "GET_ACCESSORIES_SUCCESS";

export type Product = {
  id: string;
  type: string;
  name: string;
  color: string;
  price: number;
  manufacturer: string;
};

export type GetProductsAction = {
  type: typeof GET_PRODUCTS;
  payload: string;
};

export type GetJacketsSuccess = {
  type: typeof GET_JACKETS_SUCCESS;
  payload: Product[];
};

export type GetShirtsSuccess = {
  type: typeof GET_SHIRTS_SUCCESS;
  payload: Product[];
};

export type GetAccessoriesSuccess = {
  type: typeof GET_ACCESSORIES_SUCCESS;
  payload: Product[];
};

export type GetProductSuccessAction = {
  type: typeof GET_PRODUCTS_SUCCESS;
  payload: Product[];
};

export type ProductActions =
  | GetProductSuccessAction
  | GetProductsAction
  | GetJacketsSuccess
  | GetShirtsSuccess
  | GetAccessoriesSuccess;

export type ProductState = {
  jackets?: Product[];
  shirts?: Product[];
  accessories?: Product[];
};
