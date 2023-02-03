
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    if (!email || !password) {
      alert('Input required');
      setErrorMessage("error");
      return;
      
    }

    const data = { email, password };

    axios.post('http://127.0.0.1:3000/auth/jwt/sign', data)
      .then(response => {
        if (response.data.token) {
          sessionStorage.setItem('token', response.data.token);
          nav('/main');
        }
      })
      .catch(error => {
        alert('Login did not work');
        console.error(error);
      });
};



  return (
    <div id="login">
      <h1>You are not logged in. Log in with an email and the password m294</h1>
      {errorMessage && <div>{errorMessage}</div>}
      <form id="loginform" onSubmit={handleSubmit}>
        <input className='log' type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className='log' type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;