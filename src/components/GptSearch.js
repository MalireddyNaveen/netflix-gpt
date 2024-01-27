import React from "react";
import GptSearBar from "./GptSearBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img src={BG_URL} alt="bg_img" />
      </div>
      <GptSearBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
