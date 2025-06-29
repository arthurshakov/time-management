import { ACTION_TYPES } from '../actions/types';

const initialState = {
  user: null,
  loading: false,
  error: null,
  sessionId: null,
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_REQUEST:
    case ACTION_TYPES.LOAD_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case ACTION_TYPES.LOGIN_SUCCESS:
    case ACTION_TYPES.LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };

    case ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case ACTION_TYPES.LOAD_USER_FAILURE:
      return {
        ...state,
        loading: false
      };

    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};

export default authReducer;
