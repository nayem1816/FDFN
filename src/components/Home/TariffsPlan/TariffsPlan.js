import React, { useEffect, useState } from "react";
import tariffsPlan from "../../../AllData/TariffsData/TariffsData.json";
import "./TariffsPlan.css";

const TariffsPlan = () => {
  const [dataPlan, setDataPlan] = useState([]);

  useEffect(() => {
    setDataPlan(tariffsPlan);
  }, []);
  return (
    <div className="my-5 container">
      <div className="text-center">
        <h5 className="font-dancing color-red font-bold tariffs-title-top">
          Tariffs
        </h5>
        <h2 className="font-ubuntu tariffs-title">Choose your plan</h2>
        <p className="font-open-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in{" "}
          <br /> elementum urna est ut ligula.
        </p>
      </div>
      <div className="row">
        {dataPlan.map((data) => (
          <div className="col-md-3 p-2">
            <div className="border text-center p-3 rounded border-danger">
              <p>{data.support}</p>
              <h4>{data.tariffsName}</h4>
              <img src={data.tariffsIcon} alt="" />
              <p>{data.feature1}</p>
              <p>{data.feature2}</p>
              <p>{data.feature3}</p>
              <p>{data.feature4}</p>
              <h5>TAKA {data.price}| Months</h5>
              <button className="btn btn-danger">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TariffsPlan;
