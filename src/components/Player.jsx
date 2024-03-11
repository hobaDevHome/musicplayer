// @ts-nocheck
import React, { useRef } from "react";

import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
} from "@heroicons/react/24/outline";

import "../App.css";

const Player = ({
  audioElem,
  isplaying,
  setisplaying,
  currentSong,
  setCurrentSong,
  songs,
}) => {
  const clickRef = useRef();

  const PlayPause = () => {
    setisplaying(!isplaying);
  };

  const checkWidth = (e) => {
    let width = clickRef.current ? clickRef.current.clientWidth : 0;
    const offset = e.nativeEvent.offsetX;

    const divprogress = (offset / width) * 100;
    audioElem.current.currentTime = (divprogress / 100) * currentSong.length;
  };

  const skipBack = () => {
    const index = songs.findIndex((x) => x.title === currentSong.title);
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
    <div className="p-4 border-1  text-slate-400 flex flex-col items-center justify-between bg-black">
      <div className="title">
        <p>{currentSong.name}</p>
      </div>
      <div className="navigation">
        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
          <div
            className="seek_bar"
            style={{ width: `${currentSong.progress + "%"}` }}
          ></div>
        </div>
      </div>
      <div className="controls">
        <div>
          <BackwardIcon className="w-12 h-12" onClick={skipBack} />
        </div>

        {isplaying ? (
          <PauseIcon className="w-12 h-12" onClick={PlayPause} />
        ) : (
          <PlayIcon className="w-12 h-12" onClick={PlayPause} />
        )}
        <div>
          <ForwardIcon className="w-12 h-12" onClick={skiptoNext} />
        </div>
      </div>
    </div>
  );
};

export default Player;
