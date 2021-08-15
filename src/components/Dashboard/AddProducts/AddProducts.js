import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageUrl, setImageUrl] = useState("");

    const handleUploadImage = (event) => {
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set("key", "94e8e908997cb2f7fead68d619169951");
        imgData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onSubmit = (data) => {
        const allProducts = { ...data, imageUrl };

        fetch("https://hidden-everglades-14055.herokuapp.com/addProducts", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(allProducts),
        })
            .then((res) => res.json)
            .then((data) => {
                console.log(data);
                alert("Your Product Added Successfully");
                reset();
            });
    };
    return (
        <div>
            <h1>Add Products</h1>
            <div className="mt-5 mx-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h5>Product Name*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Name"
                                {...register("productName", { required: true })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Product Image*</h5>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleUploadImage}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Product Price*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product Price"
                                {...register("productPrice", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Description*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Product description"
                                {...register("description", { required: true })}
                            />
                        </div>
                        <div className="col-md-12">
                            <input
                                className="btn btn-dark"
                                type="submit"
                                value="Add Product"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;
