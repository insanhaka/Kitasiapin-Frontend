
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux";



// Pages Import
import Home from './resource/home/Home';
// Auth Page
import Login from './resource/auth/Signin';
import Signup from './resource/auth/Signup';
// Private Page
import Dashboard from './resource/dashboard/Dashboard';
import Invitation from './resource/invitation/Invitation';
import Sent from './resource/sent/Sent';
import Profile from './resource/profile/Profile';


const PrivateRoute = () => {
  const token = localStorage.getItem('passport');

  // if (authorization.isAuth) {
  if (token !== null) {
    return <Outlet />
  }else {
    return <Navigate to="/login"/>
  }

}

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>

            <Route path="/" element={<Home/>} />

            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />

            <Route path='/dashboard' element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path='/invitation' element={<PrivateRoute/>}>
              <Route path="/invitation" element={<Invitation/>}/>
              <Route path="/invitation/create" element={<Profile/>}/>
            </Route>
            <Route path='/sent' element={<PrivateRoute/>}>
              <Route path="/sent" element={<Sent/>}/>
            </Route>
            <Route path='/profile' element={<PrivateRoute/>}>
              <Route path="/profile" element={<Profile/>}/>
            </Route>

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}