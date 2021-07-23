import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import "firebase/firestore";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const GoogleLogin = () => {
  var googleProvider = new firebase.auth.GoogleAuthProvider();

  const handelGoogleSignIn = () => {
    // console.log("Clicked");
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const userName = result.user.displayName;
        const userEmail = result.user.email;
        const userPhoto = result.user.photoURL;
        console.log(userName, userEmail, userPhoto);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
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
