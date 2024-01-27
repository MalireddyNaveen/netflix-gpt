import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCotainer from "./SecondaryCotainer";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import UseTopRatedMovies from "../hooks/UseTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpComingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  UseTopRatedMovies();
  usePopularMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryCotainer />
    </div>
  );
};

export default Browse;
