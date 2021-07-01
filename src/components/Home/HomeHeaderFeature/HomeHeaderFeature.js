import React from "react";
import "./HomeHeaderFeature.css";

const headerFeatures = [
  {
    id: 1,
    image: "https://i.ibb.co/qMG55NF/computer.png",
    title: "Broadband",
    description:
      "Unlimited high speed internet for the whole family and devices",
    price: "40",
  },
  {
    id: 2,
    image: "https://i.ibb.co/fQXZWcS/tv-1.png",
    title: "Satelite TV",
    description:
      "Over 200 entertainment channels with movies, cartoons, sport and shows",
    price: "30",
  },
  {
    id: 3,
    image: "https://i.ibb.co/W69zxR5/phone.png",
    title: "Mobility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum.",
    price: "50",
  },
];

const HomeHeaderFeature = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="container header-feature">
        <div className="row">
          {headerFeatures.map((feature) => (
            <div className="col-md-4 p-4 feature-card">
              <div className="row feature-card-align">
                <div className="col-5">
                  <img className="img-fluid" src={feature.image} alt="" />
                </div>
                <div className="col-7 feature-card-description">
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                  <h5>
                    Start from <span>{feature.price}</span>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderFeature;
