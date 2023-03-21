import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      '/login',
      {
        password: password,
        email: email,
      },
      {
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    );
    if (res.data) {
      if (res.data.isAdmin === true) {
        window.location.href = '/adminpanel';
      } else {
        window.location.href = '/';
      }
    } else {
      console.log('error');
    }
  };
  return (
    <>
      <form>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          onChange={(e) => {
            setemail(e.target.value);
          }}
        ></input>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Your Password"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        ></input>

        <button onClick={handlesubmit}>Submit</button>
      </form>
    </>
  );
};

export default Login;
