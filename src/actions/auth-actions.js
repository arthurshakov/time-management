import { ACTION_TYPES } from "./types";

export const loginSuccess = (userData, sessionId) => {
  localStorage.setItem('sessionId', sessionId);

  const {id, login, roleId, createdAt} = userData;

  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload: {
      user: {id, login, roleId, createdAt},
      sessionId: sessionId,
      isAuthenticated: true,
    },
  };
};

export const logout = () => {
  localStorage.removeItem('sessionId');

  return {
    type: ACTION_TYPES.LOGOUT
  };
};
