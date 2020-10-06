import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { Layout } from "antd"
import Sidebar from "./Components/Sidebar"
import Footer from "./Components/Footer"
import Home from "./Views/Home";
import Login from "./Views/Login";
import Header from "./Components/Header.js"
import './App.css';
import Register from "./Views/Register"
import Profile from "./Views/Profile"
import Admin from "./Views/Admin"
import Meetings from "./Views/Meetings"
import AttendantCreate from "./AdminProvider/AttendantProvider/AttendantCreate"
import OrganizerCreate from "./AdminProvider/OrganizerProvider/OrganizerCreate"


function App(props) {
  return (
    <>
    <Header/>
    <Layout className="App">
      <Sidebar/>
      <Switch>
        <div className="content">
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
          <Route path="/users/create/:eventId">
            <OrganizerCreate/>
          </Route>
        </div>
      </Switch>
      
    </Layout>
    <Footer/>
    </>
    
    
  );
}

export default App;
