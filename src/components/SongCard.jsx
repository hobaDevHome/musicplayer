import React, { useState } from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const SongCard = ({ song }) => {
  const [showPlayButton, setshowPlayButton] = useState(false);
  return (
    <div className="flex flex-col m-0 p-0 max-sm:justify-center max-sm:items-center md:items-start md:justify-start ">
      <div
        className="flex flex-col m-0 p-0  "
        onMouseEnter={() => setshowPlayButton(true)}
        onMouseLeave={() => setshowPlayButton(false)}
      >
        <img
          src={song.imageSrc}
          alt="song"
          className="rounded w-[220px] h-[220px] object-cover z-9 hover:brightness-[0.5] "
        />
      </div>
      <div>
        <div className="text-md text-gray-700 pt-2 pb-1 sm:self-center md:self-start">
          {song.name}
        </div>
        <div className="text-sm text-gray-500  pb-3 sm:self-center md:self-start">
          {song.singer}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
