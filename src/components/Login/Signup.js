import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock, faUserTie } from "@fortawesome/free-solid-svg-icons";
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

const Signup = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    // eslint-disable-next-line no-unused-vars
    const [showMessage, setShowMessage] = useState();
    let history = useHistory();
    let location = useLocation();
    const [successUser, setSuccessUser] = useState("");

    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const mainPassword = data.password === data.confirmPassword;
        if (mainPassword) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    userName(data.name);
                    setSuccessUser("User Create Successfully");
                    // alert("User Create Successfully");
                    // const { email } = userCredential.user;
                    // const userName = { name: data.name };
                    // setLoggedInUser(userName);
                    history.replace(from);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setShowMessage(errorMessage);
                    alert(errorMessage);
                });
        } else {
            alert("Incorrect Password. Please check your password!");
        }
    };
    const userName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        })
            .then((res) => {
                // console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="">
            <div className="login-page-style d-flex justify-content-center align-items-center">
                <div className="main_div container-sm">
                    <div className="title">Signup Form</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p className="text-center text-success">
                            {successUser}
                        </p>
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
                                type="email"
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
                                {...register("confirmPassword", {
                                    required: true,
                                })}
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
