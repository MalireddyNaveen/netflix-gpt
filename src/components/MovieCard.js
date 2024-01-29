import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import { addWatchMovieId } from "../utils/moviesSlice";
import { Link } from "react-router-dom";

const MovieCard = ({ movieId, posterPath }) => {
  const dispatch = useDispatch();
  if (!posterPath) return null;
  const handleClick = () => {
    dispatch(addWatchMovieId(movieId));
  };
  return (
    <div className="w-36 md:w-48 pr-4">
      <Link to="/watch">
        <img
          onClick={handleClick}
          className="w-56"
          alt="moviePoster"
          src={IMG_CDN_URL + posterPath}
        />
      </Link>
    </div>
  );
};

export default MovieCard;
