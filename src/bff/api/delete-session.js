import { API_URL } from "../constants"

export const deleteSession = (sessionId) =>
  fetch(`${API_URL}/sessions/${sessionId}`, {
    method: 'DELETE',
  })
