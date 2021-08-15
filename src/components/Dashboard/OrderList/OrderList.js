import React, { useEffect, useState } from "react";
import OrderListDetails from "./OrderListDetails/OrderListDetails";

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(
            "https://hidden-everglades-14055.herokuapp.com/buySuccessProducts"
        )
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    let count = 1;

    const orderReverse = orders.concat().reverse();

    return (
        <div className="">
            <h2>Order List</h2>
            <div className="mx-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Total Product</th>
                            <th scope="col">Status</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderReverse.map((order) => (
                            <OrderListDetails count={count++} order={order} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OrderList;
