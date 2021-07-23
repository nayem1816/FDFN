import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderList from "../OrderList/OrderList";
import AddPackages from "../AddPackages/AddPackages";
import AddProducts from "../AddProducts/AddProducts";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import ManagePackages from "../ManagePackages/ManagePackages";
import ManageProducts from "./../ManageProducts/ManageProducts";

const Dashboard = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

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
        <div className="header-top">
          <p>Nayem</p>
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
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
