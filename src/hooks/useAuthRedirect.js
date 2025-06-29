import { useSelector } from "react-redux";
import { authSelector } from "../selectors";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export const useAuthRedirect = (redirectPath = '/') => {
  const authData = useSelector(authSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (authData.isAuthenticated) {
      navigate(redirectPath);
    }
  }, [authData.isAuthenticated, navigate, redirectPath]);

  return authData;
};
