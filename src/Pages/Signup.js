import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './style.css';
const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [otpform, setotpform] = useState('false');
  const [password, setpassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [otp, setotp] = useState('');

  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/signup', {
      email: email,
    });
    if (res.data === 'otpsent') {
      setotpform('true');
    }
  };
  const handleoptsubmit = async () => {
    const res = await axios.post('/otp', {
      name: name,
      password: password,
      email: email,
      mobile: mobile,
      otp: otp,
    });
    if (res.data === 'success') {
      const notify = () => toast('your data successfully stored in database');
      return (
        <div>
          <button onClick={notify}>Success</button>
          <ToastContainer />
        </div>
      );
    } else {
    }
  };
  return (
    <>
      {otpform === 'false' && (
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
      )}
      {otpform === 'true' && (
        <>
          <form>
            <lable>Enter your otp</lable>
            <input type="number" onChange={(e) => setotp(e.target.value)} />
            <button onSubmit={handleoptsubmit}>Submit</button>
          </form>
        </>
      )}
    </>
  );
};

export default Signup;
