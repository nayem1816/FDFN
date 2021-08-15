import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddMovies = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageUrl, setImageUrl] = useState("");
    const [movieShow, setMovieShow] = useState();

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
        const moviesData = { ...data, imageUrl };
        console.log(moviesData);

        fetch("https://hidden-everglades-14055.herokuapp.com/allMovies", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(moviesData),
        })
            .then((res) => res.json)
            .then((data) => {
                alert("Movies added successfully.");
                reset();
            });
    };

    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/movies")
            .then((res) => res.json())
            .then((data) => {
                setMovieShow(data);
            });
    }, []);
    let count = 1;

    const handleDelatePd = (id) => {
        fetch(
            "https://hidden-everglades-14055.herokuapp.com/movieDelete/" + id,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((result) => {
                console.log("delete Successfully");
            });
    };

    return (
        <div>
            <h1>Add Movies</h1>
            <div className="mt-5 mx-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-5">
                        <div className="col-md-6">
                            <h5>Movie Name*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Movie Name"
                                {...register("movieName", { required: true })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Movie Banner*</h5>
                            <input
                                type="file"
                                className="form-control"
                                onChange={handleUploadImage}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Movie Rating*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Movie Rating"
                                {...register("movieRating", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Release Year*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Release Year"
                                {...register("releaseYear", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Download Link*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Download Link"
                                {...register("downloadLink", {
                                    required: true,
                                })}
                            />
                        </div>
                        <div className="col-md-6">
                            <h5>Description*</h5>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Movie description"
                                {...register("description", { required: true })}
                            />
                        </div>
                        <div className="col-md-12">
                            <input
                                className="btn btn-dark"
                                type="submit"
                                value="Add Movie"
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="mt-5">
                <h2>Manages Movies</h2>
                <div className="mt-5 mx-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#ID</th>
                                <th scope="col">Movie Name</th>
                                <th scope="col">Release Year</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {movieShow?.map((movie) => (
                                <tr>
                                    <td>{count++}</td>
                                    <td>{movie?.movieName}</td>
                                    <td>{movie?.releaseYear}</td>
                                    <td>{movie?.movieRating}</td>
                                    <td>
                                        <Link
                                            onClick={() =>
                                                handleDelatePd(movie?._id)
                                            }
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
        </div>
    );
};

export default AddMovies;
