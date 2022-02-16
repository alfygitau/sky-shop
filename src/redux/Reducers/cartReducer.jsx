import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionTypes/actionTypes";

const initialState = {
  cartItems: [],
//   cartLength: 0,
//   total: 0,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (x) => x.productID === item.productID
      );

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.productID === existItem.productID ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
