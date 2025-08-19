
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    // API call, check email/password
    const success = true; // simulate

    if (success) {
      Swal.fire('Login Successful', '', 'success').then(() => {
        navigate('/dashboard');
      });
    }
  };

  return <button onClick={handleLogin}>Login</button>;
};
 export default LoginForm;
