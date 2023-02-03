import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = { email, password };

    axios.post('http://127.0.0.1:3000/auth/jwt/sign', data)
      .then(response => {
        if (response.data.token) {
          sessionStorage.setItem('token', response.data.token);

        }
      
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>

  );
};

export default Login;