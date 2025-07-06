import { deleteProject, deleteTimeEntry, getTimeEntries } from "../api";

export const removeProject = async (projectId) => {
  try {
    const projectTimeEntries = await getTimeEntries({projectId})
    // console.log(projectTimeEntries);
    await deleteProject(projectId);
    projectTimeEntries.forEach(async (timeEntry) => {
      await deleteTimeEntry(timeEntry.id);
    });

    return {
      res: true,
      error: null,
    }
  } catch(error) {
    console.error('Error deleting project:', error);

    return {
      res: null,
      error: error,
    }
  }
};
