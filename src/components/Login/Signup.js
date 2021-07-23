import React from "react";
import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt,
  faLock,
  faPhone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase.config";
import GoogleLogin from "./GoogleLogin";
import FacebookLogin from "./FacebookLogin";

// firebase.initializeApp(firebaseConfig);

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      <Header />
      <div className="login-page-style d-flex justify-content-center align-items-center">
        <div className="main_div container-sm">
          <div className="title">Signup Form</div>
          <div className="social_icons">
            <GoogleLogin />
            <FacebookLogin />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input_box">
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
            </div>
            <div className="input_box">
              <input
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faAt} />
              </div>
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className="input_box">
              <input
                type="password"
                placeholder="Confirm password"
                {...register("confirmPassword", { required: true })}
              />
              <div className="icon">
                <FontAwesomeIcon icon={faLock} />
              </div>
            </div>
            <div className="input_box button">
              <input type="submit" value="Signup" />
            </div>
            <div className="sign_up">
              Are You member? <Link to="/login">Login now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
