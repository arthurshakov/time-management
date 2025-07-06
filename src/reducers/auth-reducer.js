import { ACTION_TYPES } from '../actions/types';

const initialState = {
  user: null,
  // projects: null,
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
        // projects: action.payload.projects,
        sessionId: action.payload.sessionId,
        isAuthenticated: action.payload.isAuthenticated,
        error: null,
      }
    // case ACTION_TYPES.UPDATE_PROJECT: {
    //   return {
    //     ...state,
    //     projects: state.projects.map((project) => {
    //       console.log(project.id);
    //       console.log(action.payload.id);
    //       return project.id === action.payload.id
    //       ? action.payload
    //       : project
    //     })
    //   }
    // }

    case ACTION_TYPES.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
