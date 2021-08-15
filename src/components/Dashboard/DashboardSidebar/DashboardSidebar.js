import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSidebar.css";

const DashboardSidebar = ({ sidebarToggle }) => {
    return (
        <div className="dashboard-sidebar mt-5">
            <ul onClick={sidebarToggle}>
                <li>
                    <Link
                        to="/dashboard/orderList"
                        className="dashboard-navigation"
                    >
                        Order List
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/addPackages"
                        className="dashboard-navigation"
                    >
                        Add Packages
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/managePackages"
                        className="dashboard-navigation"
                    >
                        Manage Packages
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/addProducts"
                        className="dashboard-navigation"
                    >
                        Add Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/manageProducts"
                        className="dashboard-navigation"
                    >
                        Manage Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/makeAdmin"
                        className="dashboard-navigation"
                    >
                        Make Admin
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/addMovies"
                        className="dashboard-navigation"
                    >
                        Add Movies
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/registeredCustomer"
                        className="dashboard-navigation"
                    >
                        Registered Customer
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DashboardSidebar;
