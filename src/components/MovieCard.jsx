import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 pr-4 w-36">
      <img
        className="object-cover md:h-auto h-44"
        src={IMG_CDN + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
