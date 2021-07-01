import React from "react";

const ExtraFeature = () => {
  return (
    <div className="">
      <div className="container my-5">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h2>
              <span>Live Sport</span>and TV-shows for best <br />
              friends
            </h2>
            <p>
              Etiam euismod eros in nisl iaculis venenatis. Aenean venenatis
              turpis et gravida interdum. Nulla facilisi. Pellentesque
              imperdiet, sem et commodo interdum, justo velit sagittis metus
              erat sed purus.
            </p>
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <h2>4K</h2>
                <h5 className="ms-2">Ultra HD Quality</h5>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <h2>200+</h2>
                <h5 className="ms-2">Online Channels</h5>
              </div>
            </div>
            <button className="btn btn-danger">Read more</button>
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
