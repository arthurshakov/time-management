import { API_URL } from "../constants";

export const getUser = async (requestedLogin) =>
  fetch(`${API_URL}/users/?login=${requestedLogin}`)
    .then(response => response.json())
    .then(([user]) => user);
