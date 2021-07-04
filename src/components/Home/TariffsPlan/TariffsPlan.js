import React from "react";
import TariffsCorporate from "./TariffsCorporate/TariffsCorporate";
import TariffsHome from "./TariffsHome/TariffsHome";
import TariffsLocal from "./TariffsLocal/TariffsLocal";

import "./TariffsPlan.css";

const TariffsPlan = () => {
  return (
    <div className="my-5 container">
      <div className="text-center">
        <h5 className="font-dancing color-red font-bold tariffs-title-top">
          Tariffs
        </h5>
        <h2 className="font-ubuntu tariffs-title">Choose your plan</h2>
        <div className="d-flex justify-content-center">
          <div className="pill-main-navbar p-3">
            <ul
              className="nav nav-pills mb-3 bg-danger rounded-pill row d-flex pill-navbar align-items-center"
              id="pills-tab"
              role="tablist"
            >
              <li
                className="nav-item pill-navbar-item p-0 col-4"
                role="presentation"
              >
                <button
                  className="nav-link active text-white rounded-pill tariffs-button font-ubuntu"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  role="tab"
                >
                  Home
                </button>
              </li>
              <li
                className="nav-item pill-navbar-item p-0 col-4"
                role="presentation"
              >
                <button
                  className="nav-link text-white rounded-pill tariffs-button font-ubuntu"
                  id="pills-breakfast-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-local"
                  role="tab"
                >
                  Locally
                </button>
              </li>
              <li
                className="nav-item pill-navbar-item p-0 col-4"
                role="presentation"
              >
                <button
                  className="nav-link text-white rounded-pill tariffs-button font-ubuntu"
                  id="pills-lunch-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-corporate"
                  role="tab"
                >
                  Corporate
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="tab-content d-block" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-home">
              <TariffsHome />
            </div>
            <div className="tab-pane fade" id="pills-local">
              <TariffsLocal />
            </div>
            <div className="tab-pane fade" id="pills-corporate">
              <TariffsCorporate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffsPlan;
