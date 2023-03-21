import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
export const Adminpanel = () => {
  const [usersdata, setusersdata] = useState([]);
  const [admin, setadmin] = useState([]);
  useEffect(() => {
    const userauth = async () => {
      const res = await axios.get('/authenticate', {
        withCredentials: true,
        headers: {
          Accept: 'application.json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
      if (res.data === 'error') {
        window.location.href = '/login';
      } else {
        if (res.data.isAdmin === true) {
          setadmin(res.data);
        } else {
          window.location.href = '/login';
        }
      }
    };
    userauth();
    const findusersdata = async () => {
      const res = await axios.get('/find/usersdata');
      setusersdata(res.data);
    };
    findusersdata();
  }, []);
  const handleremoveuser = async (e) => {
    const res = await axios.post('/remove/user/byid', {
      id: e.target.value,
    });
    if (res.data === 'Deleted') {
      window.location.reload();
    }
  };

  return (
    <div>
      <a href="/profile">Profile</a>
      {admin.length !== 0 && (
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phoneno</th>
            <th>password</th>
            <th>role</th>
          </tr>
          {usersdata.slice(0, 10).map((u) => (
            // function prepareList() {
            //   for (count = 0; count < 100; count++)
            //   //add iteration elements to an array
            //   createPages= getPageNumber();//user defined function
            //   }

            //             function preparePages() {
            //               var start= ((presentPage - 1) * countPerEachPage);
            //               var end = start+ countPerEachPage;
            //               listPage= list.slice(start, end);
            <tr>
              <td>{u.name}</td>

              <td>{u.email}</td>
              <td>{u.mobile}</td>
              <td>
                <button value={u._id} onClick={handleremoveuser}>
                  Remove user
                </button>
                <Popup trigger={<button>View Todo</button>} modal nested>
                  {(close) => (
                    <div className="modal">
                      <div className="content">
                        {u.todo.map((t) => (
                          <div>{t.todo}</div>
                        ))}
                      </div>
                      <div>
                        <button onClick={() => close()}>Close modal</button>
                      </div>
                    </div>
                  )}
                </Popup>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
};
