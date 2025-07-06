import { API_URL } from "../constants";

export const editProject = async (projectId, obj) =>
  fetch(`${API_URL}/projects/${projectId}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }
  )
    .then(response => response.json())
    .then((project) => project);
