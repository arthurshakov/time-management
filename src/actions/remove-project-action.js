import { ACTION_TYPES } from "./types";

export const removeProjectAction = (projectId) => ({
  type: ACTION_TYPES.REMOVE_PROJECT,
  payload: projectId,
});
