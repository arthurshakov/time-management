import { ACTION_TYPES } from "./types";

export const updateProjectAction = (project) => ({
  type: ACTION_TYPES.UPDATE_PROJECT,
  payload: project,
});
