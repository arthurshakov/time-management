import { API_URL } from "../constants";

export const getProject = async (projectId) =>
  fetch(`${API_URL}/projects/${projectId}`)
    .then(response => response.json())
    .then((project) => project);
