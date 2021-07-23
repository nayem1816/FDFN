import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="login-page-style d-flex justify-content-center align-items-center">
        <div className="main_div container-sm">
          <div className="title">Login Form</div>
          <div className="social_icons">
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <form action="#">
            <div className="input_box">
              <input type="text" placeholder="Enter your email" required />
              <div className="icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
            </div>
            <div className="input_box">
              <input type="password" placeholder="Password" required />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className="option_div">
              <div className="check_box">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>
              <div className="forget_div">
                <Link to="#">Forgot password?</Link>
              </div>
            </div>
            <div className="input_box button">
              <input type="submit" value="Login" />
            </div>
            <div className="sign_up">
              Not Link member? <Link to="/signup">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
