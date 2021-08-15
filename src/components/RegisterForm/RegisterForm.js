import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./RegisterForm.css";

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const [userImageUrl, setUserImageUrl] = useState({});
    const [nidFrontImageUrl, setNidFrontImageUrl] = useState({});
    const [nidBackImageUrl, setNidBackImageUrl] = useState({});

    const handleUploadImageUser = (event) => {
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set("key", "94e8e908997cb2f7fead68d619169951");
        imgData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then(function (response) {
                setUserImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handleUploadImageNidFront = (event) => {
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set("key", "94e8e908997cb2f7fead68d619169951");
        imgData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then(function (response) {
                setNidFrontImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const handleUploadImageNidBack = (event) => {
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set("key", "94e8e908997cb2f7fead68d619169951");
        imgData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imgData)
            .then(function (response) {
                setNidBackImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const onSubmit = (data) => {
        const registerData = {
            ...data,
            userImageUrl,
            nidFrontImageUrl,
            nidBackImageUrl,
        };
        fetch("https://hidden-everglades-14055.herokuapp.com/registerForm", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(registerData),
        })
            .then((res) => res.json)
            .then((data) => {
                alert("Thank You! You are Registered.");
                reset();
            });
    };
    return (
        <div>
            <Header />
            <div className="text-center register-form-top">
                <div className="register-form-bg d-flex justify-content-center align-items-center">
                    <div className="text-white container mt-5">
                        <div className="p-2">
                            <Link className="register-form-logo" to="/">
                                FDFN
                            </Link>
                        </div>
                        <h6 className="font-open-sans font-monospace">
                            Friends Digital Fiber Network
                        </h6>
                        <h3 className="p-2 font-ubuntu">
                            Internet Subscriber Registration Form
                        </h3>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row p-2">
                        <label
                            for="subscriberName"
                            className="col-sm-2 col-form-label"
                        >
                            Subscriber's Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="subscriberName"
                                {...register("subscriberName", {
                                    required: true,
                                })}
                                placeholder="Subscriber Name"
                            />
                            {errors.subscriberName && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="authorizedPersonName"
                            className="col-sm-2 col-form-label"
                        >
                            Authorized Person's Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                placeholder="Authorized Person Name"
                                className="form-control"
                                id="authorizedPersonName"
                                {...register("authorizedPersonName", {
                                    required: true,
                                })}
                            />
                            {errors.authorizedPersonName && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="yourPhoto"
                            className="col-sm-2 col-form-label"
                        >
                            Your Photo
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control"
                                id="yourPhoto"
                                onChange={handleUploadImageUser}
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="contactNumber"
                            className="col-sm-2 col-form-label"
                        >
                            Contact Number
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                placeholder="Your Contact Number"
                                className="form-control"
                                id="contactNumber"
                                {...register("contactNumber", {
                                    required: true,
                                })}
                            />
                            {errors.contactNumber && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label for="email" className="col-sm-2 col-form-label">
                            Email
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                {...register("email", { required: true })}
                                placeholder="Your Email"
                            />
                            {errors.email && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="nationalId"
                            className="col-sm-2 col-form-label"
                        >
                            National ID No.
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="nationalId"
                                {...register("nationalId", { required: true })}
                                placeholder="National ID No."
                            />
                            {errors.nationalId && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>

                    <div className="row p-2">
                        <label
                            for="nidFrontPhoto"
                            className="col-sm-2 col-form-label"
                        >
                            NID Front Page
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control"
                                id="nidFrontPhoto"
                                onChange={handleUploadImageNidFront}
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="nidBackPhoto"
                            className="col-sm-2 col-form-label"
                        >
                            NID Back Page
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="file"
                                className="form-control"
                                id="nidBackPhoto"
                                onChange={handleUploadImageNidBack}
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="dateOfBirth"
                            className="col-sm-2 col-form-label"
                        >
                            Date Of Birth
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="dateOfBirth"
                                {...register("dateOfBirth", { required: true })}
                                placeholder="Date Of Birth"
                            />
                            {errors.dateOfBirth && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label for="gender" className="col-sm-2 col-form-label">
                            Gender
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select"
                                {...register("gender", { required: true })}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select>
                            {errors.gender && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="address"
                            className="col-sm-2 col-form-label"
                        >
                            Address
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                {...register("address", { required: true })}
                                placeholder="Address"
                            />
                            {errors.address && (
                                <span className="color-red">
                                    This field is required
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="occupation"
                            className="col-sm-2 col-form-label"
                        >
                            Occupation
                        </label>
                        <div className="col-sm-10">
                            <select
                                className="form-select"
                                {...register("occupation")}
                            >
                                <option value="business">Business</option>
                                <option value="student">Student</option>
                                <option value="government">
                                    Government Service
                                </option>
                                <option value="private">Private Service</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="fathersName"
                            className="col-sm-2 col-form-label"
                        >
                            Father's Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="fathersName"
                                {...register("fathersName")}
                                placeholder="Father Name"
                            />
                        </div>
                    </div>
                    <div className="row p-2">
                        <label
                            for="mothersName"
                            className="col-sm-2 col-form-label"
                        >
                            Mother's Name
                        </label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="mothersName"
                                {...register("mothersName")}
                                placeholder="Mother Name"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <input type="submit" value="Register" />
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default RegisterForm;
