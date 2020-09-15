import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route, } from 'react-router-dom';
import UserList from './UserList';
import UserDetail from './UserDetail';
import UserCreate from './UserCreate';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <UserList />
        </Route>
        <Route exact path="/add">
          <UserCreate />
        </Route>
        <Route path="/:id">
          <UserDetail />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
