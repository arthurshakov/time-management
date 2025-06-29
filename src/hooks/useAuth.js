import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../selectors";
import { useEffect, useState } from "react";
import { loginSuccess } from "../actions/auth-actions";
import { fetchAuthDataBySessionId } from "../bff/operations";

export const useAuth = () => {
  const authData = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async() => {
      const localStorageSessionId = localStorage.getItem('sessionId');
      // console.log

      if (authData.isAuthenticated || !localStorageSessionId) {
        setIsLoading(false);
        return;
      }

      try {
        const authDataFromServer = await fetchAuthDataBySessionId(localStorageSessionId);
        console.log(authDataFromServer);

        dispatch(loginSuccess(authDataFromServer.res.user, authDataFromServer.res.projects, authDataFromServer.res.sessionId));
      } catch(error) {
        console.log(error);

        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    checkSession();

  }, [authData, dispatch]);

  return {...authData, isLoading, error};
};
