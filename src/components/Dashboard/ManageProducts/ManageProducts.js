/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3032/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    let count = 1;

    const handleDelatePd = (id) => {
        fetch("http://localhost:3032/productDelete/" + id, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("delete Successfully");
            });
    };

    return (
        <div>
            <h2>ManageProducts</h2>
            <div className="mt-5 mx-3">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((pd) => (
                            <tr>
                                <td>{count++}</td>
                                <td>{pd?.productName}</td>
                                <td>{pd?.productPrice}</td>
                                <td>
                                    <Link
                                        onClick={() => handleDelatePd(pd?._id)}
                                        to="#"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
