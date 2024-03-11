// @ts-nocheck

import React, { useRef, useState, useEffect } from "react";
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

const Footer = ({ data, songId }) => {
  const [isLooping, setIsLoopint] = useState(false);
  const [songs, setSongs] = useState(data);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const audioElem = useRef();
  const clickRef = useRef();

  useEffect(() => {
    setSongs(data);
    console.log(songId);
    if (!songId) {
    } else {
      let current = songs.find((e) => e.id === songId);
      setCurrentSong(current);
      setisplaying(true);
    }
  }, [songId]);
  useEffect(() => {
    if (isplaying) {
      if (audioElem.current) audioElem.current.play();
    } else {
      if (audioElem.current) audioElem.current.pause();
    }
  }, [isplaying, currentSong]);

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({
      ...currentSong,
      progress: (ct / duration) * 100,
      length: duration,
    });
  };

  const checkWidth = (e) => {
    let width = clickRef.current ? clickRef.current.clientWidth : 0;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.id === currentSong.id);
    if (index === 0) {
      setCurrentSong(songs[songs.length - 1]);
    } else {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  };

  const skiptoNext = () => {
    const index = songs.findIndex((x) => x.id === currentSong.id);

    if (index === songs.length - 1) {
      setCurrentSong(songs[0]);
    } else {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  };

  return (
    <footer
      className="w-full  flex fixed items-center justify-between h-[60px]  border-2 p-0 m-0 bottom-0"
      style={{ backgroundColor: "#2EA0B6" }}
      aria-label="Global"
    >
      {currentSong && (
        <audio
          src={currentSong.soundSrc}
          ref={audioElem}
          onTimeUpdate={onPlaying}
        />
      )}
      {/* larger screens */}
      <div className="flex justify-between w-full">
        {/* ---------- play puase ----------------- */}
        <div className="flex w-56 items-center px-2 justify-center">
          <div>
            <BackwardIcon
              className="h-8 w-8 text-white mr-2 cursor-pointer"
              onClick={skipBack}
            />
          </div>
          <div
            onClick={() => setisplaying(!isplaying)}
            className="cursor-pointer"
          >
            {!isplaying ? (
              <PlayIcon
                className="h-8 w-8 text-white"
                onClick={() => setisplaying(!isplaying)}
              />
            ) : (
              <PauseIcon
                className="h-8 w-8 text-white"
                onClick={() => setisplaying(!isplaying)}
              />
            )}
          </div>

          <div>
            <ForwardIcon
              className="h-8 w-8 text-white ml-2 cursor-pointer"
              onClick={skiptoNext}
            />
          </div>
        </div>

        <div
          className="max-sm:hidden  md:flex w-full py-3 justify-center items-center text-white"
          style={{ backgroundColor: "#36B0C8" }}
        >
          {currentSong && currentSong.name}
        </div>
        {/* ------------------ controls -------------------- */}
        <div className="flex w-96 items-center px-2 justify-between">
          <div className="text-white text-xs max-sm:hidden">00:00</div>
          <div>
            <SpeakerWaveIcon className="max-sm:hidden md:flex h-4 w-5 text-white mr-2 cursor-pointer" />
          </div>

          <div className="navigation w-70 max-sm:hidden md:flex">
            <div
              className="navigation_wrapper"
              onClick={checkWidth}
              ref={clickRef}
            >
              <div
                className="seek_bar"
                style={{ width: `${currentSong.progress + "%"}` }}
              ></div>
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
