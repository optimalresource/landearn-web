import React, { useState, useEffect } from 'react'
import './index.css'
import Close from "../../assets/images/mobile/close.svg";
import { useLocation } from "react-router-dom";
import Signup from './signup';
import Login from './login';

const Auth = ({ show, loginModalExitClickHandler }) => {
    const [loginActive, setLoginActive] = useState(true);
    const [signupActive, setSignupActive] = useState(false);
    const [authForm, setAuthForm] = useState(<Login />);

    const location = useLocation();

    useEffect(() => {
      if (location.pathname.includes("/signup")) {
        setAuthForm(<Signup />);
      }
    }, [location]);

  let drawerClasses = ["login-wrapper"];
  if (show) {
    drawerClasses = ["login-wrapper", "open"];
    console.log("This is terrible");
  }

    function _onWrapperClick(event) {
        event.preventDefault();

        if (event.target === event.currentTarget){
            loginModalExitClickHandler();
        }
    }

    function click(value){
        let login= false;
        let signup = false;

        if (value === "login") {
          login = true;
          setAuthForm(<Login />);
        } else {
          signup = true;
          setAuthForm(<Signup />);
        }

        setLoginActive(login);
        setSignupActive(signup);
    }
  return (
    <div
      className={drawerClasses.join(" ")}
      onClick={(e) => _onWrapperClick(e)}
    >
      <div className="auth-container">
        <div className="top-bar">
          <div className="auth-box">
            <div
              className={`auth-tab axiforma-600-bold-cod-gray-14px ${
                loginActive ? "active" : "inactive"
              }`}
              onClick={() => click("login")}
            >
              Login
            </div>
            <div
              className={`auth-tab axiforma-600-bold-cod-gray-14px ${
                signupActive ? "active" : "inactive"
              }`}
              onClick={() => click("signup")}
            >
              Sign up
            </div>
          </div>

          <div className="close-auth" onClick={loginModalExitClickHandler}>
            <img src={Close} alt="close" className="close-img" />
          </div>
        </div>

        {authForm}
      </div>
    </div>
  );
};

export default Auth;