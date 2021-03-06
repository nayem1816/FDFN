import React, { useEffect, useState } from "react";
import "./HomeMovies.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

SwiperCore.use([Navigation]);

const HomeMovies = () => {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        fetch("https://hidden-everglades-14055.herokuapp.com/movies")
            .then((res) => res.json())
            .then((data) => {
                setMovieData(data);
            });
    }, []);
    const moviesData = movieData.concat().reverse();
    return (
        <div id="interesting" className="full-home-movie">
            <div className="text-center">
                <h5 className="font-dancing color-red font-bold home-title-top">
                    Interesting
                </h5>
                <h2 className="font-ubuntu home-title text-white">
                    Featured Shows
                </h2>
                <p className="font-open-sans text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Proin bibendum, est ac faucibus hendrerit, mauris ante
                    viverra urna, in
                    <br /> elementum urna est ut ligula.
                </p>
            </div>
            <div className="container-fluid">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper movie-slider"
                >
                    {moviesData.map((movie) => (
                        <SwiperSlide className="d-flex justify-content-center">
                            <div className="movie-link-not-style">
                                <div className="">
                                    <Link to={`/movies/${movie._id}`}>
                                        <img
                                            className="img-fluid movie-image"
                                            src={movie.imageUrl}
                                            alt=""
                                        />
                                    </Link>
                                    <br />
                                    <Link
                                        to={`/movies/${movie._id}`}
                                        className="text-start movie-name movie-link-not-style"
                                    >
                                        {movie.movieName}
                                    </Link>
                                    <div className="d-flex justify-content-between pt-2">
                                        <p className="movie-release-year movie-link-not-style">
                                            {movie.releaseYear}
                                        </p>
                                        <p className="movie-rating movie-link-not-style">
                                            <FontAwesomeIcon icon={faStar} />
                                            <span className="ms-1">
                                                {movie.movieRating}
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeMovies;
