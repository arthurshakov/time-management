import { API_URL } from "../constants";

export const validateSession = async (sessionId) => {
  const response = await fetch(`${API_URL}/sessions?id=${sessionId}`);
  const sessions = await response.json();

  if (sessions.length === 0) {
    return { isValid: false, user: null };
  }

  const session = sessions[0];
  const isExpired = new Date(session.expiresAt) < new Date();

  return {
    isValid: !isExpired,
    user: { id: session.userId }
  };
};
