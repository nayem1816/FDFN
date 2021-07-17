/* eslint-disable no-unused-vars */
import React from "react";
import { animateScroll as scroll, Link } from "react-scroll";
import "./ExtraFeature.css";

const ExtraFeature = () => {
  return (
    <div className="">
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h2 className="font-ubuntu font-bold extra-feature-title mb-4">
              <span className="color-red">Live Sport </span>and TV-shows for
              best friends
            </h2>
            <p className="font-open-sans mb-4">
              Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis
              turpis et gravida interdum. Nulla facilisi. Pellentesque
              imperdiet, sem et commodo interdum, justo velit sagittis metus
              erat sed purus.
            </p>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center extra-feature-sub-title">
                <h2>4K</h2>
                <h5 className="ms-2">Ultra HD Quality</h5>
              </div>
              <div className="col-md-6 d-flex align-items-center extra-feature-sub-title">
                <h2>200+</h2>
                <h5 className="ms-2">Online Channels</h5>
              </div>
            </div>
            <Link to="interesting"
              smooth={true}
              duration={300} className="btn extra-btn-style">Read more</Link>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://i.ibb.co/QmqSgM9/live-sport.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ExtraFeature;
