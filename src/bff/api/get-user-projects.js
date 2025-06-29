import { API_URL } from "../constants"

export const getUserProjects = (userId) =>
  fetch(`${API_URL}/projects/?userId=${userId}`)
    .then(rawProjects => rawProjects.json());
