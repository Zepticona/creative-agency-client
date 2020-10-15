import React from 'react';
// import Home from './components/Home/Home/Home'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import UserPanel from './components/UserPanel/UserPanel';
import { createContext } from 'react';
import { useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AdminPanel from './components/AdminPanel/AdminPanel';

export const UserContext = createContext();
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/adminPanel">
            <AdminPanel></AdminPanel>
          </PrivateRoute>
          <PrivateRoute path="/userPanel">
            <UserPanel></UserPanel>
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
