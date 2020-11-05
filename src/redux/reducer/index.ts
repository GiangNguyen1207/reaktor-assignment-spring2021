import { combineReducers } from "redux";

import { product } from "./productReducer";

const rootReducer = combineReducers({ product });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
