import { deleteSession } from "../api";

export const logout = async (sessionId) => {
  await deleteSession(sessionId);

  return {
    error: null,
    res: {
      user: null,
      sessionId: null,
    }
  };
};
