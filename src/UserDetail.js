import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const [user, setUser] = useState({ username: '' });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/users/${id}`)
      .then(response => setUser(response.data))
      .catch(err => console.log(err.message));
  }, [id]);

  return (
    <div>
      {<p>{user.username}</p>}
    </div>
  )
}
