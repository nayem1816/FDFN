import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "firebase/firestore";
import { userContext } from "./../../App";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const GoogleLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    googleProvider.setCustomParameters({
        prompt: "select_account",
    });
    let history = useHistory();
    let location = useLocation();

    // const storeAuthToken = () => {
    //     firebase
    //         .auth()
    //         .currentUser.getIdToken(true)
    //         .then(function (idToken) {
    //             localStorage.setItem("token", idToken);
    //             // Cookies.set("token", idToken);
    //         })
    //         .catch(function (error) {
    //             // Handle error
    //         });
    // };

    let { from } = location.state || { from: { pathname: "/" } };
    const handelGoogleSignIn = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                // sessionStorage.setItem("userEmail", result?.user?.email);
                // const { displayName, email, photoURL } = result.user;
                // const googleUser = {
                //     name: displayName,
                //     email,
                //     photo: photoURL,
                // };
                // setLoggedInUser(googleUser);
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    return (
        <Link onClick={handelGoogleSignIn} to="#">
            <FontAwesomeIcon icon={faGoogle} />
            <span>Google</span>
        </Link>
    );
};

export default GoogleLogin;
