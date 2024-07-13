import React from "react";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 md:px-12 px-6 absolute  text-white bg-gradient-to-r from-black w-full aspect-video md:pt-52">
      <h1 className="text-xl md:text-4xl font-bold ">{title} </h1>
      <p className="hidden py-6 text-sm w-1/4 md:inline-block">{overview}</p>
      <div className="w-[196px] flex justify-between items-center my-3">
        <button
          className="bg-white text-black px-4 py-[2px] w-20 flex items-center justify-center text-xl
         rounded-md hover:bg-opacity-80 "
        >
          <span
            className=" inline-block mr-1 text-sm
        "
          >
            <FaPlay />
          </span>
          Play
        </button>
        <button className="bg-gray-500 px-5 py-1 text-white bg-opacity-40 rounded-md hidden md:inline-block">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
