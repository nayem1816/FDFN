import React, { useEffect, useState } from "react";
import moviesData from "../../../AllData/MoviesData/MoviesData.json";
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
    setMovieData(moviesData);
  }, []);
  const tenMovies = movieData.slice(0, 10);
  return (
    <div className="my-5">
      <div className="text-center">
        <p>Interesting</p>
        <h2>Featured Shows</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
          bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in
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
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper movie-slider"
        >
          {tenMovies.map((movie) => (
            <SwiperSlide className="d-flex justify-content-center">
              <Link className='movie-link-not-style' to="">
                <div className="">
                  <img
                    className="img-fluid movie-image"
                    src={movie.movieImg}
                    alt=""
                  />
                  <h4 className="text-start movie-name movie-link-not-style">
                    {movie.movieName}
                  </h4>
                  <div className="d-flex justify-content-between">
                    <p className="movie-release-year movie-link-not-style">
                      {movie.releaseYear}
                    </p>
                    <p className="movie-rating movie-link-not-style">
                      <FontAwesomeIcon icon={faStar} />
                      <span className="ms-1">{movie.rating}</span>
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeMovies;