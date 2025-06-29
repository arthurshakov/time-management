import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../selectors";
import { getSession } from "../bff/api";
import { useEffect, useState } from "react";
import { loginSuccess } from "../actions/auth-actions";

export const useAuth = () => {
  const authData = useSelector(authSelector);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async() => {
      const localStorageSessionId = localStorage.getItem('sessionId');

      if (authData.isAuthenticated || !localStorageSessionId) {
        setIsLoading(false);
        return;
      }

      try {
        const session = await getSession(localStorageSessionId);
        dispatch(loginSuccess(session.user, session.id));
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
