import { API_URL } from "../constants";

const TIME_ENTRIES_URL = `${API_URL}/time-entries`;

export const createTimeEntry = async (entry) =>
  fetch(TIME_ENTRIES_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  })
    .then(response => response.json());
