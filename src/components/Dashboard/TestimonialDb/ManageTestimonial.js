import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ManageTestimonial = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageUrl, setImageUrl] = useState("");
    const [testimonials, setTestimonials] = useState();

    const handleUploadImage = (event) => {
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
        const testimonialData = { ...data, imageUrl };

        fetch("https://hidden-everglades-14055.herokuapp.com/testimonialData", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(testimonialData),
        })
            .then((res) => res.json)
            .then((data) => {
                alert("Testimonial Added Successfully");
                reset();
            });
    };

    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/testimonials")
            .then((res) => res.json())
            .then((data) => {
                setTestimonials(data);
            });
    }, []);
    let count = 1;

    const handleDelatePd = (id) => {
        fetch(
            "https://hidden-everglades-14055.herokuapp.com/testimonialDelete/" +
                id,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log("delete Successfully");
            });
    };

    console.log(testimonials);

    return (
        <div>
            <h1>Testimonial Details</h1>
            <div className="mt-5 mx-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h5>Name*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                {...register("testimonialName", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Profile Image*</h5>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleUploadImage}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Title*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                {...register("testimonialTitle", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Description*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Description"
                                {...register("description", { required: true })}
                            />
                        </div>
                        <div className="col-md-12">
                            <input
                                className="btn btn-dark"
                                type="submit"
                                value="Add Testimonial"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-5">
                <h2>Manages Testimonials</h2>
                <div className="mt-5 mx-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials?.map((testimonial) => (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{testimonial?.testimonialName}</td>
                                    <td>{testimonial?.testimonialTitle}</td>
                                    <td>
                                        <Link
                                            onClick={() =>
                                                handleDelatePd(testimonial?._id)
                                            }
                                            to="#"
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTestimonial;
