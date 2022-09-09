/* eslint-disable jsx-a11y/anchor-is-valid */
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import { userContext } from './../../../App';
import firebase from 'firebase/app';
import 'firebase/auth';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [navbarScroll, setNavbarScroll] = useState(false);
    const [adminEmail, setAdminEmail] = useState([]);
    const history = useHistory();

    const scrollHeader = () => {
        if (window.scrollY >= 100) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false);
        }
    };
    window.addEventListener('scroll', scrollHeader);

    // const localStorageToken = localStorage.getItem("token");

    useEffect(() => {
        fetch(
            'https://hidden-everglades-14055.herokuapp.com/isAdmin?email=' +
                loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setAdminEmail(data[0]));
    }, [loggedInUser.email]);

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                const signOutUser = {
                    isSSignIn: false,
                    name: '',
                    email: '',
                    photo: '',
                };
                setLoggedInUser(signOutUser);
                history.push('/');
            })
            .catch((error) => {
                alert('Please again sign out');
            });
    };

    return (
        <div
            className={
                navbarScroll
                    ? 'navbar-bg-color active fixed-top'
                    : 'navbar-bg-color fixed-top'
            }
        >
            <nav className="">
                <div className="container d-flex justify-content-between align-items-center p-0">
                    <div className="d-flex flex-nowrap align-items-center ">
                        <Link
                            to="/"
                            className="logo order-2 order-lg-1 ps-3 ps-lg-0"
                        >
                            FDFN
                        </Link>
                        <div className="mt-lg-3 order-1 order-lg-2">
                            <input type="checkbox" id="click" />
                            <label for="click" className="menu-btn">
                                <FontAwesomeIcon
                                    className="mobile-menu-icon"
                                    icon={faBars}
                                />
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
                                    <Link className="menu-items" to="/contact">
                                        Contact
                                    </Link>
                                </li>
                                {loggedInUser.email ? (
                                    <li>
                                        <Link
                                            className="menu-items"
                                            to="/myOrder"
                                        >
                                            My Order
                                        </Link>
                                    </li>
                                ) : (
                                    ''
                                )}
                                {adminEmail?.email && (
                                    <li>
                                        <Link
                                            className="menu-items"
                                            to="/dashboard"
                                        >
                                            Dashboard
                                        </Link>
                                    </li>
                                )}
                                <li className="">
                                    <Link
                                        className="menu-items active"
                                        to="/registration"
                                    >
                                        Registration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        {loggedInUser.email ? (
                            <div className="d-flex align-items-center dropdown">
                                <Link
                                    className="rounded-circle user-icon dropdown-toggle"
                                    to="#"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {loggedInUser.photo ? (
                                        <img
                                            className="img-fluid rounded-circle"
                                            src={loggedInUser?.photo}
                                            alt="https://i.ibb.co/g3MGk57/avator.png"
                                        />
                                    ) : (
                                        <img
                                            className="img-fluid rounded-circle"
                                            src="https://image.flaticon.com/icons/png/512/149/149071.png"
                                            alt=""
                                        />
                                    )}
                                </Link>
                                <ul
                                    class="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <a
                                            onClick={handleSignOut}
                                            className="dropdown-item"
                                            href="/"
                                        >
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center">
                                <Link
                                    className="rounded-circle user-icon"
                                    to="login"
                                >
                                    <FontAwesomeIcon
                                        style={{ color: '#48C0BF' }}
                                        className="user-icon-style"
                                        icon={faUser}
                                        size="2x"
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
