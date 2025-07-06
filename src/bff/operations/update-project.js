import { editProject } from "../api";

export const updateProject = async (projectId, updatedData) => {
  try {
    const project = await editProject(projectId, updatedData);

    return {
      res: project,
      error: null,
    }
  } catch(error) {
    console.error('Error updating project:', error);

    return {
      res: null,
      error: error,
    }
  }
};
