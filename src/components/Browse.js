import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCotainer from "./SecondaryCotainer";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptsearch);

  useNowPlayingMovies();
  UseTopRatedMovies();
  usePopularMovies();
  useUpComingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryCotainer />
        </>
      )}
    </div>
  );
};

export default Browse;
