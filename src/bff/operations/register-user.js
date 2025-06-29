import { ROLES } from "../../constants";
import { createUser } from "../api";

export const registerUser = async ({login, password}) => {
  const userData = {
    login,
    password,
    createdAt: new Date().toISOString(),
    roleId: ROLES.USER,
  }

  const user = await createUser(userData);

  return {
    error: null,
    res: user,
  };
};
