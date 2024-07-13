import React from "react";
import { useSelector } from "react-redux";
import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  useTrailer(movieId);
  const trailerKey = useSelector((store) => {
    return store.movies?.trailerVideo;
  });

  return (
    <div className="w-full ">
      <iframe
        className="aspect-video w-full object-cover"
        src={
          "https://www.youtube.com/embed/" +
          trailerKey?.key +
          "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
