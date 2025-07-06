import { getSession, getUserProjects } from "../api";

export const fetchAuthDataBySessionId = async (sessionId) => {
  const session = await getSession(sessionId);

  if (Object.keys(session).length === 0) {
    return {
      error: 'failed to get session',
      res: null,
    }
  }

  const projects = await getUserProjects(session.user.id);

  return {
    error: null,
    res: {
      user: session.user,
      projects,
      sessionId: session.id,
    }
  };
};
