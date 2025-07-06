import { ACTION_TYPES } from "../actions";

const initialAppState = {
  projects: null,
  timeEntries: null,
}

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        projects: action.payload.projects,
      }
    case ACTION_TYPES.UPDATE_PROJECT: {
      return {
        ...state,
        projects: state.projects.map((project) => {
          console.log(project.id);
          console.log(action.payload.id);
          return project.id === action.payload.id
          ? action.payload
          : project
        })
      }
    }
    case ACTION_TYPES.REMOVE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.payload),
      }
    default:
      return state
  }
};
