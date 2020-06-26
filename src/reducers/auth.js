/* eslint-disable max-lines-per-function */
import {
  AUTH_ERROR,
  CHANGE_PASSWORD,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  isFarmer: null,
  isLoading: false,
  token: localStorage.getItem('token'),
  user: null
};

// eslint-disable-next-line default-param-last
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isFarmer: action.payload.is_farmer,
        isLoading: false,
        user: action.payload
      };
    case CHANGE_PASSWORD:
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isFarmer: action.payload.user.is_farmer,
        isLoading: false
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        isFarmer: false,
        isLoading: false,
        token: null,
        user: null
      };
    default:
      return state;
  }
};
