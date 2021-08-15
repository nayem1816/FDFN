import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHome, faTimes } from "@fortawesome/free-solid-svg-icons";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import AddPackages from "../AddPackages/AddPackages";
import AddProducts from "../AddProducts/AddProducts";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import ManagePackages from "../ManagePackages/ManagePackages";
import ManageProducts from "./../ManageProducts/ManageProducts";
import AddMovies from "../AddMovies/AddMovies";
import RegisteredPeople from "../RegisteredPeople/RegisteredPeople";
import { userContext } from "../../../App";
import firebase from "firebase/app";
import "firebase/auth";

const Dashboard = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();

    const handleSignOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                const signOutUser = {
                    isSSignIn: false,
                    name: "",
                    email: "",
                    photo: "",
                };
                setLoggedInUser(signOutUser);
                history.push("/");
            })
            .catch((error) => {
                alert("Please again sign out");
            });
    };

    const showSidebar = () => setSidebarToggle(!sidebarToggle);
    return (
        <div className="">
            <div className="main-dashboard-top d-flex justify-content-between py-3 px-5 bg-dark text-white">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="">
                        <FontAwesomeIcon
                            onClick={showSidebar}
                            className="menu-btn toggle-icon"
                            icon={faBars}
                        />
                        <div className="d-flex justify-content-center">
                            <Link className="dashboard-title-link" to="/">
                                <h2 className="dashboard-title">FDFN</h2>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-top d-flex align-items-center">
                    <div className="me-4">
                        <Link to="">
                            <FontAwesomeIcon
                                className="text-white"
                                icon={faHome}
                                size="2x"
                            />
                        </Link>
                    </div>
                    <div className="">
                        <Link
                            onClick={handleSignOut}
                            to="#"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Logout"
                        >
                            <img
                                style={{ width: "40px", height: "40px" }}
                                className="img-fluid rounded-circle"
                                src={loggedInUser.photo}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <Router>
                <div className="dashboard">
                    <div
                        className={
                            sidebarToggle
                                ? `sidebar active bg-dark text-white`
                                : `sidebar bg-dark text-white py-3`
                        }
                    >
                        <div className="header">
                            <FontAwesomeIcon
                                onClick={showSidebar}
                                className="cros-btn toggle-icon my-3"
                                icon={faTimes}
                            />
                        </div>
                        <div className="">
                            <DashboardSidebar sidebarToggle={sidebarToggle} />
                        </div>
                    </div>

                    <div className="main-dashboard p-3">
                        <Switch>
                            <Route exact path="/dashboard">
                                <OrderList />
                            </Route>
                            <Route path="/dashboard/orderList">
                                <OrderList />
                            </Route>
                            <Route path="/dashboard/addPackages">
                                <AddPackages />
                            </Route>
                            <Route path="/dashboard/addProducts">
                                <AddProducts />
                            </Route>
                            <Route path="/dashboard/makeAdmin">
                                <MakeAdmin />
                            </Route>
                            <Route path="/dashboard/managePackages">
                                <ManagePackages />
                            </Route>
                            <Route path="/dashboard/manageProducts">
                                <ManageProducts />
                            </Route>
                            <Route path="/dashboard/addMovies">
                                <AddMovies />
                            </Route>
                            <Route path="/dashboard/registeredCustomer">
                                <RegisteredPeople />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;
