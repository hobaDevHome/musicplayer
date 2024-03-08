import React, { useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const SongCard = ({ song }) => {
  const [showPlayButton, setshowPlayButton] = useState(false);
  return (
    <div className="flex flex-col  relative m-0 p-0 justify-center items-center ">
      <div
        className="flex flex-col  relative m-0 p-0 justify-center items-center "
        onMouseEnter={() => setshowPlayButton(true)}
        onMouseLeave={() => setshowPlayButton(false)}
      >
        <img
          src={require(`../images/${song.imgsrc}`)}
          alt="song"
          className="rounded w-[220px] h-[220px] object-cover  "
        />
        {showPlayButton && (
          <div
            className=" flex justify-center items-center w-[220px] h-[220px]  absolute top-0 left-0 bg-black/60 rounded  "
            onClick={() => console.log("first")}
          >
            <div className="flex justify-center items-center bg-white rounded-full m-0 p-0 h-10 w-10">
              <PlayCircleIcon className="h-10 w-10  m-0 p-0 cursor-pointer z-10" />
            </div>
          </div>
        )}
      </div>

      <div className="text-md text-gray-700 pt-2 pb-1 sm:self-center md:self-start">
        {song.songName}
      </div>
      <div className="text-sm text-gray-500  pb-3 sm:self-center md:self-start">
        {song.singer}
      </div>
    </div>
  );
};

export default SongCard;
