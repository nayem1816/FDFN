import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="container">
        <div className="text-center">
          <h1>
            <Link className="logo-style font-ubuntu" to="">
              FDFN
            </Link>
          </h1>
          <p className="font-open-sans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            debitis quasi ipsum error maxime ducimus distinctio fugit,
            <br /> explicabo iure sed pariatur doloremque excepturi nihil
            eligendi.
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <Link
              className="icon-link p-2 m-3 d-flex align-items-center justify-content-center"
              to=""
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              className="icon-link p-2 m-3 d-flex align-items-center justify-content-center"
              to=""
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className="icon-link p-2 m-3 d-flex align-items-center justify-content-center"
              to=""
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className="icon-link p-2 m-3 d-flex align-items-center justify-content-center"
              to=""
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
        <div className="">
          <div className="row d-flex justify-content-center justify-md-content-between">
            <div className="col-md-6">
              <p className="text-center text-md-start">
                © All Rights Reserved - 2021 -{" "}
                <Link className="footer-bottom" to="">
                  FDFN
                </Link>
                .
              </p>
            </div>

            <div className="col-md-6 text-center text-md-end">
              <small className="">
                Developed by{" "}
                <Link className="footer-bottom" to="">
                  Md Nayeem Hossain
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
