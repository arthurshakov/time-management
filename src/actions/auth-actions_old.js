// import { ACTION_TYPES } from "./types";

// import { login as apiLogin, getUser as apiGetCurrentUser } from '../bff/api';

// export const loginRequest = () => ({
//   type: ACTION_TYPES.LOGIN_REQUEST
// });

// export const loginSuccess = (user) => ({
//   type: ACTION_TYPES.LOGIN_SUCCESS,
//   payload: user
// });

// export const loginFailure = (error) => ({
//   type: ACTION_TYPES.LOGIN_FAILURE,
//   payload: error
// });

// export const logout = () => {
//   localStorage.removeItem('token');

//   return {
//     type: ACTION_TYPES.LOGOUT
//   };
// };

// export const loadUserRequest = () => ({
//   type: ACTION_TYPES.LOAD_USER_REQUEST
// });

// export const loadUserSuccess = (user) => ({
//   type: ACTION_TYPES.LOAD_USER_SUCCESS,
//   payload: user
// });

// export const loadUserFailure = () => ({
//   type: ACTION_TYPES.LOAD_USER_FAILURE
// });

// // Thunk action for login
// export const login = (credentials) => async (dispatch) => {
//   dispatch(loginRequest());

//   try {
//     const response = await apiLogin(credentials);
//     localStorage.setItem('token', response.token);
//     dispatch(loginSuccess(response.user));
//   } catch (error) {
//     dispatch(loginFailure(error.message));
//   }
// };

// // Thunk action for loading current user
// export const loadUser = () => async (dispatch) => {
//   dispatch(loadUserRequest());
//   try {
//     const user = await apiGetCurrentUser();
//     dispatch(loadUserSuccess(user));
//   } catch {
//     dispatch(loadUserFailure());
//   }
// };
