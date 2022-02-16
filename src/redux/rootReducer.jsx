import { combineReducers } from "redux";
import { CartReducer } from "./Reducers/cartReducer";

export const rootReducer = combineReducers({
  cart: CartReducer,
});
