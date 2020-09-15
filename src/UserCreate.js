import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function UserCreate() {

  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API}/users`, { username })
      .then(response => console.log((response.data)))
      .catch(err => console.log(err.message))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <button>submit</button>
      </form>
    </div>
  )
}
