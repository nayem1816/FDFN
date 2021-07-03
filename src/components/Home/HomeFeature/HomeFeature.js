import React from "react";

const features = [
  {
    id: 1,
    name: "Ultra-speed Connection",
    imgSrc: "https://i.ibb.co/m8kdJz7/fast.png",
  },
  {
    id: 2,
    name: "250+ World Channels",
    imgSrc: "https://i.ibb.co/tDLdVz9/television-1.png",
  },
  {
    id: 3,
    name: "Free Installation",
    imgSrc: "https://i.ibb.co/2nQ3JC3/wifi-router.png",
  },
  {
    id: 4,
    name: "4K and 8K Quality",
    imgSrc: "https://i.ibb.co/rbqm0CX/4k.png",
  },
  {
    id: 5,
    name: "Flexible Tariff Plans",
    imgSrc: "https://i.ibb.co/9THGk3N/diagram.png",
  },
  {
    id: 6,
    name: "Fast Support 24/7",
    imgSrc: "https://i.ibb.co/TtkFjxq/24-hours-support-1.png",
  },
];

const HomeFeature = () => {
  return (
    <div className="my-5 container">
      <div className="row">
        {features.map((feature) => (
          <div className="col-6 col-md-2 text-center">
            <img className="img-fluid p-4" src={feature.imgSrc} alt="" />
            <h6 className='font-ubuntu font-bold'>{feature.name}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeature;
