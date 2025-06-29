import { API_URL } from "../constants";

export const getSession = (sessionId) =>
  fetch(`${API_URL}/sessions/${sessionId}`)
    .then(rawSession => rawSession.json())
  ;
