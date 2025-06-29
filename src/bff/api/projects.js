import { API_URL } from "../constants";

const PROJECTS_URL = `${API_URL}/projects`

export const getProjects = async () => {
  try {
    const response = await fetch(PROJECTS_URL);

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    return await response.json();
  } catch(error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}
