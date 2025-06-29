import { API_URL } from "../constants"

export const createUser = async (userData) =>
  fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then(rawUser => rawUser.json());
