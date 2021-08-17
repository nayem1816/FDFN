/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/packages")
            .then((res) => res.json())
            .then((data) => {
                setPackages(data);
            });
    }, [packages]);
    let count = 1;

    const handleDelatePd = (id) => {
        fetch(
            "https://hidden-everglades-14055.herokuapp.com/packageDelete/" + id,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((result) => {
                alert(
                    "delete Successfully",
                    history.push("/dashboard/managePackages")
                );
            });
    };

    return (
        <div>
            <h2>Manage Packages</h2>
            <div className="mt-5 mx-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Package Type</th>
                            <th scope="col">Package Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {packages?.map((pak) => (
                            <tr>
                                <td>{count++}</td>
                                <td>{pak?.packageType}</td>
                                <td>{pak?.packageName}</td>
                                <td>{pak?.packagePrice}</td>
                                <td>
                                    <Link
                                        className=""
                                        onClick={() => handleDelatePd(pak?._id)}
                                        to="#"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
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
                                                            {pak?.packageName}
                                                        </h5>
                                                        <button
                                                            type="button"
                                                            class="btn-close"
                                                            data-bs-dismiss="modal"
                                                            aria-label="Close"
                                                        ></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <h5>
                                                            Package Type:{" "}
                                                            {pak?.packageType}
                                                        </h5>
                                                        <h5>
                                                            Package Title:{" "}
                                                            {pak?.packageTitle}
                                                        </h5>
                                                        <h5>
                                                            Package Name:{" "}
                                                            {pak?.packageName}
                                                        </h5>
                                                        <h5>
                                                            Package Price:{" "}
                                                            {pak?.packagePrice}
                                                        </h5>
                                                        <h5>
                                                            Feature 1:{" "}
                                                            {pak?.features1}
                                                        </h5>
                                                        <h5>
                                                            Feature 2:{" "}
                                                            {pak?.features2}
                                                        </h5>
                                                        <h5>
                                                            Feature 3:{" "}
                                                            {pak?.features3}
                                                        </h5>
                                                        <h5>
                                                            Feature 4:{" "}
                                                            {pak?.features4}
                                                        </h5>
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

export default ManagePackages;
