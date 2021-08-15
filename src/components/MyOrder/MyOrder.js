import React, { useContext, useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import { userContext } from "./../../App";

const MyOrder = () => {
    const [loggedInUser] = useContext(userContext);
    const [orderList, setOrderList] = useState([]);
    useEffect(() => {
        fetch(
            "https://hidden-everglades-14055.herokuapp.com/orderEmail?email=" +
                loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setOrderList(data));
    }, [loggedInUser.email]);

    console.log(loggedInUser.email);

    return (
        <div>
            <Header />
            <div style={{ height: "80px" }} className="bg-dark"></div>
            <div className="container mt-5">
                <h2>My Order</h2>
                <h5>Name: {loggedInUser.name}</h5>
                <h5>Email: {loggedInUser.email}</h5>
                <h5>Total Order: {orderList.length}</h5>
                <div className="row my-5 pb-5">
                    {orderList.map((order) => (
                        <div className="col-12 col-md-6">
                            <div className="bg-dark p-3 text-white rounded m-2">
                                <h4>
                                    Product Name:{" "}
                                    <span className="fw-light">
                                        {order.singleProduct.productName}
                                    </span>
                                </h4>
                                <h5>
                                    Total Price:{" "}
                                    <span className="fw-light">
                                        {order.newPrice}
                                    </span>
                                </h5>
                                <h5>
                                    Product Count:{" "}
                                    <span className="fw-light">
                                        {order.pdCount}
                                    </span>
                                </h5>
                                <h5>
                                    Status:{" "}
                                    <span className="fw-light">
                                        {order.orderStatus}
                                    </span>
                                </h5>
                                <h5>
                                    Address:{" "}
                                    <span className="fw-light">
                                        {order.order.address}
                                    </span>
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;
