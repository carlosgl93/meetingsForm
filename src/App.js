import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { Layout } from "antd"
import Sidebar from "./Components/Sidebar"
import Home from "./Views/Home";
import Login from "./Views/Login";
import './App.css';
import Register from "./Views/Register"
import Profile from "./Views/Profile"
import Admin from "./Views/Admin"
import Meetings from "./Views/Meetings"
import AttendantCreate from "./AdminProvider/AttendantProvider/AttendantCreate"


function App(props) {
  return (
    <Layout className="App">
      <Sidebar/>
      <Switch>
        <div>
          <Route exact path="/">  
            <Home/>
          </Route>
          <Route path="/signUp">
            <Register/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/profile">
            <Profile/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/meetings/:eventId/:participantId">
            <Meetings/>
          </Route>
          <Route path="/invite/:eventId/:participantId">
            <AttendantCreate/>
          </Route>
        </div>
      </Switch>
    </Layout>
    
    
  );
}

export default App;
