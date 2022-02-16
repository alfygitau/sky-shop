import { combineReducers } from "redux";
import { CartReducer } from "./Reducers/cartReducer";
import { loginReducer, registerReducer } from "./Reducers/userReducer";

export const rootReducer = combineReducers({
  cart: CartReducer,
  user: loginReducer,
  createdUser: registerReducer,
});
