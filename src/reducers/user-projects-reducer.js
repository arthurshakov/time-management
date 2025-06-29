import { ACTION_TYPES } from "../actions/types";

const initialState = {
  loading: false,
  error: null,
  projects: null,
};

export const userProjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_USER_PROJECTS:
      return {
        ...state,
        projects: action.payload,
        error: null,
        loading: false,
      };
    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
}
