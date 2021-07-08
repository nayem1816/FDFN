import {
  faBars,
  faShoppingCart,
  faUser
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
      className={
        navbarScroll
          ? "navbar-bg-color active fixed-top"
          : "navbar-bg-color fixed-top"
      }
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
                <Link className="menu-items" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="menu-items" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="menu-items" to="#">
                  Products
                </Link>
              </li>
              <li>
                <Link className="menu-items" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="">
                <Link className="menu-items active" to="#">
                  Form Registration
                </Link>
              </li>
              <li className="text-center">
                <Link className="menu-items" to="#">
                  <FontAwesomeIcon
                    className=""
                    icon={faShoppingCart}
                    size="lg"
                  />
                  <span className="">0</span>
                </Link>
                <Link className="menu-items" to="#">
                  <FontAwesomeIcon className="" icon={faUser} size="lg" />
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
