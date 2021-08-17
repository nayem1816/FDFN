import React from "react";
import "./TariffsLocalModal.css";

const TariffsHomeModal = () => {
    return (
        <div
            class="modal fade"
            id="exampleModal2"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3
                            class="modal-title text-dark"
                            id="exampleModalLabel"
                        >
                            Book Now
                        </h3>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <h6 className="text-dark">
                            Please contact this number
                        </h6>
                        <p className="text-dark">+8801310913326</p>
                    </div>
                    <div class="modal-footer">
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
