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

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/userPanel">
            <UserPanel></UserPanel>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <Home></Home>
          </Route>
        </Switch>
        
      </Router>
  );
}

export default App;
