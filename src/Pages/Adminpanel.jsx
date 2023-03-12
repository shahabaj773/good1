import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const Adminpanel = () => {
  const [usersdata, setusersdata] = useState([]);
  useEffect(() => {
    const findusersdata = async () => {
      const res = await axios.get('/find/usersdata');
      setusersdata(res.data);
    };
    findusersdata();
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phoneno</th>
          <th>password</th>
          <th>role</th>
        </tr>
        {usersdata.map((u) => (
          <tr>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{u.mobile}</td>
            <td>{u.password}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
