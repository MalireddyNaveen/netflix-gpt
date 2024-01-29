import React from "react";
import GptSearBar from "./GptSearBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div>
        <div className="fixed -z-10 ">
          <img
            className="h-screen object-cover md:w-screen"
            src={BG_URL}
            alt="bg_img"
          />
        </div>
        <GptSearBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
