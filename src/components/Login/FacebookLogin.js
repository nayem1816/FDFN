import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
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

const FacebookLogin = () => {
    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const storeAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                localStorage.setItem("token", idToken);
            })
            .catch(function (error) {
                // Handle error
            });
    };

    const handelFbLogin = () => {
        firebase
            .auth()
            .signInWithPopup(fbProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const fbUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(fbUser);
                storeAuthToken();
                history.replace(from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };
    return (
        <Link onClick={handelFbLogin} to="#">
            <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span>
        </Link>
    );
};

export default FacebookLogin;
