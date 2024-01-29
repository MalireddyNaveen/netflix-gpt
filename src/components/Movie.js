import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import { API_OPTIONS } from "../utils/constants";
import { addWatchMovieTrailer } from "../utils/moviesSlice";
import { useNavigate } from "react-router-dom";

const Movie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movieId = useSelector((store) => store.movies?.watchMovieId);
  const movieTrailer = useSelector((store) => store.movies?.watchMovieTrailer);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addWatchMovieTrailer(trailer));
  };
  useEffect(() => {
    movieId ? getMovieVideos() : navigate("/browse");
  }, []);
  const handleClick = () => {
    navigate("/browse");
  };

  return (
    <>
      <diV className="absolute  ">
        <button
          onClick={handleClick}
          className="py-4 px-6 mt-10 ml-10 rounded-lg text-white font-bold bg-red-800"
        >
          Back
        </button>
      </diV>
      <div className=" ">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" + movieTrailer?.key + "?autoplay=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </>
  );
};

export default Movie;
