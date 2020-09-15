import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/users`)
      .then(response => {
        console.log(`${process.env.REACT_APP_API}/users`, response.data);

        setUsers(response.data)
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div>
      {users.map(user => <Link to={`/${user._id}`} key={user._id}>{user.username}</Link>)}
    </div>
  )
}
