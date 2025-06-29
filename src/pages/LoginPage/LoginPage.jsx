import { Button } from "../../ui";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { login } from "../../bff/operations";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../actions/auth-actions";
import { useAuthRedirect } from "../../hooks";
import { getFormSchema } from "../../utils";

// const inputMatchConfig = [
//   /^[a-zA-Z0-9_.]+$/,
//   'Only letters (a-z, A-Z), numbers (0-9), underscores (_), and dots (.) are allowed'
// ];

// const loginFormSchema =  yup.object().shape({
//   login: yup.string()
//     .required('Enter your login')
//     .matches(...inputMatchConfig)
//     .min(3, 'Login must be a\u00A0minimum of\u00A03\u00A0symbols')
//     .max(15, 'Login must be a\u00A0maximum of\u00A015\u00A0symbols'),
//   password: yup.string()
//     .required('Enter your password')
//     .matches(...inputMatchConfig)
//     .min(3, 'Password must be a\u00A0minimum of\u00A03\u00A0symbols')
//     .max(15, 'Password must be a\u00A0maximum of\u00A015\u00A0symbols'),
// });

const loginFormSchema = getFormSchema(['login', 'password']);

export const LoginPage = () => {
  // IF THE USER IS ALREADY LOGGED IN WE REDIRECT HIM TO HOMEPAGE
  useAuthRedirect();

  const navigate = useNavigate();
  const [authError, setAuthError] = useState(null);
  const dispatch = useDispatch();

  const {
    register,
    // reset,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = async (formFields) => {
    const {error: authError, res} = await login(formFields);

    if (authError) {
      setAuthError(authError);
    } else {
      // After successful login
      dispatch(loginSuccess(res.user, res.projects, res.sessionId));

      navigate('/');
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="h1">Log in</h1>
        <form noValidate className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__field">
            <input
              className="form__input"
              type="text"
              placeholder="Login"
              {...register('login')}
            />
            {errors.login && (
              <p className="form__error">{errors.login.message}</p>
            )}
          </div>

          <div className="form__field">
            <input
              className="form__input"
              type="password"
              placeholder="Password"
              {...register('password')}
            />
             {errors.password && (
              <p className="form__error">{errors.password.message}</p>
            )}
          </div>

          <div className="form__footer">
            <Button type="submit" className="form__submit-button">Submit</Button>
          </div>

          {authError && (
            <div>{authError}</div>
          )}
        </form>
      </div>
    </div>
  );
};
