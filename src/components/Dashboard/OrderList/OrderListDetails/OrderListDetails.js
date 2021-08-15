/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useForm } from "react-hook-form";

const OrderListDetails = ({ order, count }) => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const id = order._id;
        const updateStatus = data;
        const updateData = { updateStatus, id };

        fetch(
            "https://hidden-everglades-14055.herokuapp.com/updateStatus/" + id,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updateData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log("Updated");
            });
        alert("Updated Successfully");
    };
    return (
        <tr className="">
            <td>{count}</td>
            <td>{order?.name}</td>
            <td>{order.order.phoneNum}</td>
            <td>{order.pdCount}</td>
            {order.orderStatus === "Pending" ? (
                <td className="text-danger">{order.orderStatus}</td>
            ) : order.orderStatus === "Ongoing" ? (
                <td className="text-warning">{order.orderStatus}</td>
            ) : (
                <td className="text-success">{order.orderStatus}</td>
            )}
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
                                        {order?.name}
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
                                        Name: <small>{order?.name}</small>
                                    </h5>
                                    <h5>
                                        Email: <small>{order?.email}</small>
                                    </h5>
                                    <h5>
                                        Total Product:{" "}
                                        <small>{order.pdCount}</small>
                                    </h5>
                                    <h5>
                                        Total Price:{" "}
                                        <small>{order.newPrice}</small>
                                    </h5>
                                    <h5>
                                        Transaction ID:{" "}
                                        <small>{order.order.trxId}</small>
                                    </h5>
                                    <h5>
                                        Phone Number:{" "}
                                        <small>{order.order.phoneNum}</small>
                                    </h5>
                                    <h5>
                                        Address:{" "}
                                        <small>{order.order.address}</small>
                                    </h5>
                                    <h5>
                                        Product Name:{" "}
                                        <small>
                                            {order?.singleProduct?.productName}
                                        </small>
                                    </h5>
                                    <h5>
                                        Product Single Price:{" "}
                                        <small>
                                            {order?.singleProduct?.productPrice}
                                        </small>
                                    </h5>
                                    <h5>
                                        Order Time:{" "}
                                        <small>{order.orderTime}</small>
                                    </h5>
                                    <h5 className="">
                                        Status:{" "}
                                        <form
                                            className="m-0"
                                            onSubmit={handleSubmit(onSubmit)}
                                        >
                                            <select
                                                className="form-select"
                                                {...register("status")}
                                            >
                                                <option
                                                    value={order.orderStatus}
                                                    selected
                                                >
                                                    {order?.orderStatus}
                                                </option>
                                                <option value="Pending">
                                                    Pending
                                                </option>
                                                <option value="Ongoing">
                                                    Ongoing
                                                </option>
                                                <option value="Delivered">
                                                    Delivered
                                                </option>
                                            </select>
                                            <input
                                                className="btn btn-success mt-2"
                                                type="submit"
                                            />
                                        </form>
                                    </h5>
                                    <img
                                        className="img img-fluid"
                                        src={order?.singleProduct?.imageUrl}
                                        alt=""
                                    />
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
    );
};

export default OrderListDetails;
