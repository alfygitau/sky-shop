import { LOGIN_FAIL, LOGIN_START, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_START, REGISTER_SUCCESS } from "../ActionTypes/actionTypes";


const initialState = {
  loading: false,
  user: null,
  error: null,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return{
        ...state,
        user: null
      }
    default:
      return state;
  }
};


export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
      };

    default:
      return state;
  }
};