import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyLogin: React.FC = () => {
  const nav = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      nav('/');
      return;
    }

    axios
      .get('http://127.0.0.1:3000/auth/jwt/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        nav('/main');
      })
      .catch(() => {
        console.log('Incorrect Login');
      });
  }, [nav]);

  return <div />;
};

export default VerifyLogin;