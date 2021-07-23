import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";
import { useState } from "react";
import moviesData from "../../../../AllData/MoviesData/MoviesData.json";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Shared/Footer/Footer";
import Header from "../../../Shared/Header/Header";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    setMovieData(moviesData);
  }, []);
  const { id } = useParams();
  const singleMovie = movieData.find(
    (movie) => parseInt(movie.id) === parseInt(id)
  );
  console.log(singleMovie);
  return (
    <div>
      <Header />
      <div className="movies-details-style">
        <div className="movies-header">
          <div className="movies-header-bg d-flex justify-content-center align-items-center">
            <div className="text-center w-50 mt-5">
              <h2 className="display-1 color-red font-dancing">
                Download Movie
              </h2>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <h1 className="text-center font-ubuntu">Movies Details</h1>
          <div className="row mt-5">
            <div className="col-4 text-end">
              <img
                className="img-fluid rounded movie-details-img"
                src={singleMovie?.movieImg}
                alt=""
              />
            </div>
            <div className="col-8">
              <h2 className=" font-open-sans">{singleMovie?.movieName}</h2>
              <h6 className="mt-3 font-open-sans">
                Rating: {singleMovie?.rating}
              </h6>
              <h6 className="mt-3 font-open-sans">
                Release Year: {singleMovie?.releaseYear}
              </h6>
              <Link
                to={{
                  pathname:
                    "http://172.16.50.7/SAM-FTP-2/IMDb%20Top-250%20Movies/001.%20The%20Shawshank%20Redemption%20%281994%29%20720p/",
                }}
                target="_blank"
                className="btn movie-btn-style"
              >
                Download
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MovieDetails;
