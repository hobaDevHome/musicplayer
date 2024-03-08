import React, { useState } from "react";
import "./footer.css";

import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import reaeat from "../images/repeat.svg";
import shuffle from "../images/shuffle.svg";

// light footer #4cb6cb
// dark footer #2EA0B6

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLoopint] = useState(false);

  return (
    <footer
      className="w-full  flex fixed items-center justify-between h-[60px]  border-2 p-0 m-0 bottom-0"
      style={{ backgroundColor: "#2EA0B6" }}
      aria-label="Global"
    >
      {/* larger screens */}
      <div className="flex justify-between w-full">
        {/* ---------- play puase ----------------- */}
        <div className="flex w-56 items-center px-2 justify-center">
          <div>
            <BackwardIcon className="h-8 w-8 text-white mr-2 cursor-pointer" />
          </div>
          <div
            onClick={() => setIsPlaying(!isPlaying)}
            className="cursor-pointer"
          >
            {isPlaying ? (
              <PlayIcon className="h-8 w-8 text-white" />
            ) : (
              <PauseIcon className="h-8 w-8 text-white" />
            )}
          </div>

          <div>
            <ForwardIcon className="h-8 w-8 text-white ml-2 cursor-pointer" />
          </div>
        </div>

        <div
          className="max-sm:hidden  md:flex w-full py-4 justify-center items-center text-white"
          style={{ backgroundColor: "#36B0C8" }}
        >
          song name
        </div>
        {/* ------------------ controls -------------------- */}
        <div className="flex w-96 items-center px-2 justify-between">
          <div className="text-white text-xs max-sm:hidden">00:00</div>
          <div>
            <SpeakerWaveIcon className="max-sm:hidden md:flex h-4 w-5 text-white mr-2 cursor-pointer" />
          </div>
          <div className="max-sm:hidden md:flex">
            <div className="progress">
              <div className="progress-value"></div>
            </div>
          </div>
          <div>
            <img
              src={shuffle}
              alt=""
              className={`h-5 w-5 text-white  mr-2 cursor-pointer`}
            />
          </div>
          <div onClick={() => setIsLoopint(!isLooping)}>
            <img
              src={reaeat}
              alt=""
              className={`h-5 w-5 text-white  mr-2 cursor-pointer ${
                isLooping ? "opacity-100" : "opacity-65"
              }`}
            />
          </div>
        </div>
      </div>
      {/* smaller screens  */}
      {/* <div className="xs:flex md:hidden items-center"></div> */}
    </footer>
  );
};

export default Footer;
