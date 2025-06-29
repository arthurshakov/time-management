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
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        sessionId: action.payload.sessionId,
        isAuthenticated: action.payload.isAuthenticated,
        error: null,
      }
    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
