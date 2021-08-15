import React, { useContext } from "react";
import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import GoogleLogin from "./GoogleLogin";
import { useForm } from "react-hook-form";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { userContext } from "./../../App";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {
                // const { displayName, email } = userCredential.user;
                // const signedInUser = { name: displayName, email };
                // setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <div className="">
            <div className="login-page-style d-flex justify-content-center align-items-center">
                <div className="main_div container-sm">
                    <div className="title">Login Form</div>
                    <div className="social_icons">
                        <GoogleLogin />
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input_box">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            <div className="icon">
                                <FontAwesomeIcon icon={faUser} />
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
                        <div className="option_div">
                            <div className="check-box">
                                <input
                                    className="form-check-input input-check-box"
                                    name="checkbox"
                                    control={control}
                                    type="checkbox"
                                    value=""
                                    rules={{ required: true }}
                                />
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
                            Not Link member?{" "}
                            <Link to="/signup">Signup now</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
