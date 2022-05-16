import React from 'react'
import './auth.css'
import { BrowserRouter as Router, Routes, Route, Link,useLocation } from 'react-router-dom'

import Login from './Login'
import SignUp from './Signup'

function Main() {

    const location = useLocation();
    function HeaderView() {
        console.log(location.pathname);
      }

  return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'} onClick={() => HeaderView()}>
              positronX
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'} >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
              <Login />
              {/* <Route path="/sign-up" element={<SignUp />} /> */}
          </div>
        </div>
      </div>
  )
}

export default Main