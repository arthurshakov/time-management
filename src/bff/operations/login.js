import { getUser } from "../api";
import { createSession } from "../api";

export const login = async ({login: authLogin, password: authPassword}) => {
  const user = await getUser(authLogin);

  if (!user) {
    return {
      error: 'No such user',
      res: null,
    };
  }

  if (user.password !== authPassword) {
    return {
      error: 'Wrong password',
      res: null,
    };
  }

  const {id, login, roleId, createdAt} = user;

  const session = await createSession({id, login, roleId, createdAt});
  console.log(session);

  return {
    error: null,
    res: {
      user: {
        id: user.id,
        login: user.login,
        roleId: user.roleId,
        createdAt: user.createAt,
      },
      sessionId: session.id,
    }
  };
};
