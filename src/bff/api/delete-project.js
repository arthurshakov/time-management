import { API_URL } from "../constants"

export const deleteProject = (projectId) =>
  fetch(`${API_URL}/projects/${projectId}`, {
    method: 'DELETE',
  });
