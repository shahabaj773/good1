import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
const Login = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setMobile] = useState('');
  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/login', {
      name: name,
      password: password,
      email: email,
      mobile: mobile,
    });
  };
  return (
    <>
      <form>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        ></input>
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
        <label>Mobile no</label>
        <input
          type="number"
          placeholder="Enter Your Mobile no"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        ></input>

        <button onClick={handlesubmit}>Submit</button>
      </form>
    </>
  );
};

export default Login;
