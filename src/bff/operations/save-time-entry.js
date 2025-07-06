import { createTimeEntry, editProject } from "../api";

export const saveTimeEntry = async (entry, projectDuration = 0) => {
  try {
    const timeEntry = await createTimeEntry(entry);

    const project = await editProject(entry.projectId, {
      duration: projectDuration + entry.duration,
    });

    return {
      res: {timeEntry, project},
      error: null,
    }
  } catch(error) {
    console.error('Error saving time entry:', error);

    return {
      res: null,
      error: error,
    }
  }
};
