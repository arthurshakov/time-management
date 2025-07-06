import { API_URL } from "../constants"

export const deleteTimeEntry = (taskId) =>
  fetch(`${API_URL}/time-entries/${taskId}`, {
    method: 'DELETE',
  });
