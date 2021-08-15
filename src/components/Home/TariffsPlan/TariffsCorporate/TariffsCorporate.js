/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import TariffsCorporateModal from "./TariffsCorporateModal";

const TariffsCorporate = () => {
    const [dataPlan, setDataPlan] = useState([]);
    // console.log(dataPlan);
    const corporatePackages = dataPlan.filter(
        (homePackage) => homePackage.packageType === "corporate"
    );

    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => {
                setDataPlan(data);
            });
    }, []);
    return (
        <div>
            <h5 className="font-open-sans">CORPORATE INTERNAT PACKAGES</h5>
            <div className="row">
                {corporatePackages.map((data) => (
                    <div className="col-md-6 col-lg-3 p-2">
                        <div className="text-center rounded">
                            <div className="p-3 rounded-top package-card-top">
                                <p className="font-open-sans">
                                    {data.packageTitle}
                                </p>
                                <h4 className="font-ubuntu">
                                    {data.packageName}
                                </h4>
                            </div>
                            <div className="p-3 package-card-price">
                                <p className="font-open-sans">Monthly</p>
                                <h1 className="font-ubuntu">
                                    {data.packagePrice}
                                </h1>
                                <h3 className="font-ubuntu">TK</h3>
                            </div>
                            <div className="package-card-feature pt-3 px-3">
                                <p className="font-open-sans">
                                    {data.features1}
                                </p>
                                <p className="font-open-sans">
                                    {data.features2}
                                </p>
                                <p className="font-open-sans">
                                    {data.features3}
                                </p>
                                <p className="font-open-sans">
                                    {data.features4}
                                </p>
                            </div>
                            <div className="package-card-btn rounded-bottom font-ubuntu">
                                <a
                                    type="button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal3"
                                    href=""
                                    className=""
                                >
                                    Book Now
                                </a>
                                <TariffsCorporateModal />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TariffsCorporate;
