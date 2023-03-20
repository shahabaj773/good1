import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css';

export const Userpanel = () => {
  const [user, setuser] = useState([]);
  const [todo, settodo] = useState();
  const [todoarray, settodoarray] = useState([]);
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
        setuser(res.data);
        console.log(res.data.todo);
        settodoarray(res.data.todo);
      }
    };
    userauth();
  }, []);
  const handleaddtodo = async () => {
    const res = await axios.post('/add/todo', { todo: todo, id: user._id });
    if (res.data === 'submitted') {
      window.location.reload();
    }
  };
  const handletododelete = async (e) => {
    const res = await axios.post('/delete/todo', {
      todo: e.target.value,
      id: user._id,
    });
    if (res.data === 'deleted') {
      window.location.reload();
    }
  };
  const handletodoupdate = async (e) => {
    const res = await axios.post('/update/todo', {
      todo: e.target.value,
      id: user._id,
    });
    if (res.data === 'updated') {
      window.location.reload();
    }
  };
  const handlecheck = async () => {};
  return (
    <div>
      {user.name}
      <form>
        <label>Title:</label>
        <input
          type="text"
          placeholder="enter your task"
          onChange={(e) => {
            settodo(e.target.value);
          }}
          required
        />
        <button onClick={handleaddtodo} type="submit">
          Add
        </button>
      </form>
      <div>
        {todoarray.map((t) => (
          <>
            <button
              className={
                t.completed === 'false'
                  ? 'button_chekbox'
                  : 'button_chekbox_checked'
              }
              onClick={handlecheck}
            ></button>
            <p>{t.todo}</p>
            <button value={t} onClick={handletodoupdate}>
              Edit
            </button>
            <button value={t} onClick={handletododelete}>
              Delete
            </button>
          </>
        ))}
      </div>
    </div>
  );
};
