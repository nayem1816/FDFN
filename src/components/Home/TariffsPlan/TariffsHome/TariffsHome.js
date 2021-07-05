import React, { useEffect, useState } from "react";
import tariffsPlan from "../../../../AllData/TariffsData/TariffsData.json";
import "./TariffsHome.css";

const TariffsHome = () => {
  const [dataPlan, setDataPlan] = useState([]);

  useEffect(() => {
    setDataPlan(tariffsPlan);
  }, []);
  return (
    <div>
      <h5 className="font-open-sans">HOME INTERNAT PACKAGES</h5>
      <div className="row">
        {dataPlan.map((data) => (
          <div className="col-md-6 col-lg-3 p-2">
            <div className="text-center rounded">
              <div className="p-3 rounded-top package-card-top">
                <p className="font-open-sans">{data.support}</p>
                <h4 className="font-ubuntu">{data.tariffsName}</h4>
              </div>
              <div className="p-3 package-card-price">
                <p className="font-open-sans">Monthly</p>
                <h1 className="font-ubuntu">{data.price}</h1>
                <h3 className="font-ubuntu">TK</h3>
              </div>
              <div className="package-card-feature pt-3 px-3">
                <p className="font-open-sans">{data.feature1}</p>
                <p className="font-open-sans">{data.feature2}</p>
                <p className="font-open-sans">{data.feature3}</p>
                <p className="font-open-sans">{data.feature4}</p>
              </div>
              <div className="package-card-btn rounded-bottom font-ubuntu">
                <a href="tel:+8801841181011" className="">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TariffsHome;
