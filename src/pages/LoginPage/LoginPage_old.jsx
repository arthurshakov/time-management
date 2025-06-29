import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks';

export const LoginPage = () => {
  const [loginFieldValue, setLoginFieldValue] = useState('');
  const [password, setPassword] = useState('');
  const { login, error } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ loginFieldValue, password });
      console.log('success');
      // navigate('/');
    } catch (err) {
      console.log('failure');
      // Error is already handled in Redux
    }
  };

  return (
    <div className="page">
      <h1 className="h1">Login</h1>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          value={loginFieldValue}
          onChange={(e) => setLoginFieldValue(e.target.value)}
          placeholder="Login"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
