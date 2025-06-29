// import { useDispatch, useSelector } from "react-redux";
// import { authSelector } from "../selectors";
// import { useEffect } from "react";
// import { loadUser, login as loginAction, logout as logoutAction } from "../actions/auth-actions";

// export const useAuth = () => {
//   const {user, loading, error} = useSelector(authSelector);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!user && localStorage.getItem('token')) {
//       dispatch(loadUser());
//     }
//   }, [dispatch, user]);

//   return {
//     user,
//     loading,
//     error,
//     login: (credentials) => dispatch(loginAction(credentials)),
//     logout: () => dispatch(logoutAction()),
//   };
// }
