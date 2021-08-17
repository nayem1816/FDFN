import React from "react";
import "./TariffsHomeModal.css";

const TariffsHomeModal = () => {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h3
                            className="modal-title text-dark"
                            id="exampleModalLabel"
                        >
                            Book Now
                        </h3>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <h6 className="text-dark">
                            Please contact this number
                        </h6>
                        <p className="text-dark">+8801310913326</p>
                    </div>
                    <div className="modal-footer">
                        <div className="">
                            <a href="/registration" className="btn modal-btn">
                                Registration
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TariffsHomeModal;
