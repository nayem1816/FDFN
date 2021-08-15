/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisteredPeople = () => {
    const [registerCustomer, setRegisterCustomer] = useState([]);
    fetch("http://localhost:3032/registeredCustomer")
        .then((res) => res.json())
        .then((data) => {
            setRegisterCustomer(data);
        });
    let count = 1;

    const handleDelatePd = (id) => {
        fetch("http://localhost:3032/RegSubDelete/" + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("delete Successfully");
            });
    };

    return (
        <div>
            <h2>Registered Customer</h2>
            <div className="mt-5 mx-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registerCustomer?.map((registered) => (
                            <tr>
                                <td>{count++}</td>
                                <td>{registered?.subscriberName}</td>
                                <td>{registered?.email}</td>
                                <td>
                                    <Link
                                        onClick={() =>
                                            handleDelatePd(registered?._id)
                                        }
                                        to="#"
                                    >
                                        Delete
                                    </Link>
                                </td>
                                <td>
                                    <div className="">
                                        <a
                                            type="button"
                                            data-bs-toggle="modal"
                                            data-bs-target={`#exampleModal${count}`}
                                        >
                                            Details
                                        </a>

                                        <div
                                            class="modal fade"
                                            id={`exampleModal${count}`}
                                            tabindex="-1"
                                            aria-labelledby="exampleModalLabel"
                                            aria-hidden="true"
                                        >
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5
                                                            class="modal-title"
                                                            id="exampleModalLabel"
                                                        >
                                                            {
                                                                registered?.subscriberName
                                                            }
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div className="text-center">
                                                            <img
                                                                style={{
                                                                    width: "120px",
                                                                    height: "120px",
                                                                }}
                                                                className="rounded-circle"
                                                                src={
                                                                    registered?.userImageUrl
                                                                }
                                                                alt=""
                                                            />
                                                        </div>
                                                        <h5>
                                                            Subscriber's Name:{" "}
                                                            {
                                                                registered?.subscriberName
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Authorized Person's
                                                            Name:{" "}
                                                            {
                                                                registered?.authorizedPersonName
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Contact Number:{" "}
                                                            {
                                                                registered?.contactNumber
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Email:{" "}
                                                            {registered?.email}
                                                        </h5>
                                                        <h5>
                                                            National ID No.:{" "}
                                                            {
                                                                registered?.nationalId
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Date Of Birth:{" "}
                                                            {
                                                                registered?.dateOfBirth
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Gender:{" "}
                                                            {registered?.gender}
                                                        </h5>
                                                        <h5>
                                                            Gender:{" "}
                                                            {registered?.gender}
                                                        </h5>
                                                        <h5>
                                                            Address:{" "}
                                                            {
                                                                registered?.address
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Occupation:{" "}
                                                            {
                                                                registered?.occupation
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Father's Name:{" "}
                                                            {
                                                                registered?.fathersName
                                                            }
                                                        </h5>
                                                        <h5>
                                                            Mother's Name:{" "}
                                                            {
                                                                registered?.mothersName
                                                            }
                                                        </h5>
                                                        <div className="">
                                                            <img
                                                                style={{
                                                                    width: "100%",
                                                                    height: "300px",
                                                                }}
                                                                className="img-thumbnail img-fluid"
                                                                src={
                                                                    registered?.nidFrontImageUrl
                                                                }
                                                                alt="#"
                                                            />
                                                            <img
                                                                style={{
                                                                    width: "100%",
                                                                    height: "300px",
                                                                }}
                                                                className="img-thumbnail img-fluid"
                                                                src={
                                                                    registered?.nidBackImageUrl
                                                                }
                                                                alt="#"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button
                                                            type="button"
                                                            class="btn btn-secondary"
                                                            data-bs-dismiss="modal"
                                                        >
                                                            Close
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegisteredPeople;
