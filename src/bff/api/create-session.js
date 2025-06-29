import { API_URL } from "../constants";
import { v4 as uuid } from "uuid";

export const createSession = async (user) => {
  // Create a simple session
  const session ={
    id: uuid(), // a random id
    user,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
  }

  // Save to json-server's "sessions" collection
  await fetch(`${API_URL}/sessions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(session)
  });

  return session;
};

