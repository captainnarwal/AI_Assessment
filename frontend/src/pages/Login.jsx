import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../redux/authSlice';
import { login } from '../services/apis/authApi';

const Login = () => {
  const [user_id, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ user_id, password });
      console.log("login response :" , data)
      dispatch(setCredentials({ token: data.token, user: data.user }));

      // Redirect based on the user's first role
      const userRoles = data.user.roles;
      if (userRoles.includes('admin')) {
        console.log("user role :" , 'admin')
        navigate('/admin');
      } else if (userRoles.includes('instructor')) {
        console.log("user role :" , 'instructor')
        navigate('/instructor');
      } else if (userRoles.includes('candidate')) {
        console.log("user role :" , 'candidate')
        navigate('/candidate');
      } else {
        navigate('/login'); // Fallback for undefined roles
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={user_id}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
