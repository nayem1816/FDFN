import {
  faBars,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [navbarScroll, setNavbarScroll] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 100) {
      setNavbarScroll(true);
    } else {
      setNavbarScroll(false);
    }
  };
  window.addEventListener("scroll", scrollHeader);
  return (
    <div
      className={navbarScroll ? "navbar-bg-color active" : "navbar-bg-color"}
    >
      <nav className="">
        <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="logo">
            FDFN
          </Link>
          <div className="">
            <input type="checkbox" id="click" />
            <label for="click" className="menu-btn">
              <FontAwesomeIcon className="mobile-menu-icon" icon={faBars} />
            </label>
            <ul className="navbar-style-ul">
              <li>
                <Link className="menu-items" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="menu-items" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="menu-items" href="#">
                  Services
                </Link>
              </li>
              <li>
                <Link className="menu-items" href="#">
                  Products
                </Link>
              </li>
              <li>
                <Link className="menu-items" href="#">
                  Contact
                </Link>
              </li>
              <li className="ms-md-3">
                <Link className="menu-items active" href="#">
                  Form Registration
                </Link>
              </li>
              <li className="ms-md-4">
                <Link className="menu-items" href="#">
                  <FontAwesomeIcon className="" icon={faShoppingCart} />
                  <span className=''> 0</span>
                </Link>
                <Link className="menu-items ms-md-4" href="#">
                  <FontAwesomeIcon className="" icon={faUser} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
