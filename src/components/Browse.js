import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryCotainer from "./SecondaryCotainer";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryCotainer />
    </div>
  );
};

export default Browse;
