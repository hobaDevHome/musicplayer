import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const SongDetails = ({ songs }) => {
  const [suggs, setsuggs] = useState([]);
  let { id } = useParams();
  let currentSong = songs.find((e) => e.id === id);

  useEffect(() => {
    getSuggestions();
  }, []);

  const getSuggestions = () => {
    let otherSongs = songs.filter((e) => e.id !== id);
    if (otherSongs.length > 4) {
      let temp = otherSongs.slice(0, 4);
      setsuggs(temp);
    } else {
      setsuggs(otherSongs);
    }
  };

  return (
    <div
      style={{
        marginTop: 60,
        marginBottom: 60,
        height: "100vh",
        overflow: "auto",
        backgroundColor: "#F2F4F8",
      }}
    >
      <div className="flex max-sm:flex-col md:flex-row w-full ">
        <div className="bg-white  max-sm:w-11/12 md:w-2/3 m-4 h-fit">
          <div className="flex max-sm:flex-col md:flex-row itemx-center p-4 ">
            <img
              src={require(`../images/${currentSong.imgsrc}`)}
              alt="song"
              className="rounded w-[380px] h-[380px] object-cover mr-3  "
            />

            <div className="flex flex-col pl-3 mt-2">
              <div className="text-lg text-gray-700 pb-3 sm:self-center md:self-start">
                <span className="font-bold">Track</span> :{" "}
                {currentSong.songName}
              </div>
              <div className="text-lg text-gray-700 pb-3 sm:self-center md:self-start">
                <span className="font-bold">Singer</span> : {currentSong.singer}
              </div>
              <div className="text-lg text-gray-700 pb-3 sm:self-center md:self-start">
                <span className="font-bold">Composer</span> :{" "}
                {currentSong.composer}
              </div>

              <div className="text-lg text-gray-700 pb-3 sm:self-center md:self-start">
                <span className="font-bold">Duration</span> :{" "}
                {currentSong.duration} Sec.
              </div>
              <div className="text-lg text-gray-700 pb-3 sm:self-center md:self-start">
                <PlayCircleIcon className="h-14 w-14 text-orange-700 cursor-pointer hover:scale-125 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white  max-sm:w-11/12 md:w-1/3 m-4 flex flex-col h-fit">
          <div className="flex items-center pl-3 h-10 border-1 bg-gray-100 text-sm">
            Suggestions
          </div>
          {suggs.length > 0 && (
            <>
              {suggs.map((sug) => {
                return <SugCard song={sug} />;
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;

const SugCard = ({ song }) => {
  return (
    <div className="flex itemx-center p-2 ">
      <Link
        to={`/songs/${song.id}`}
        style={{ textDecoration: "none" }}
        className="flex itemx-center p-2 "
      >
        <img
          src={require(`../images/${song.imgsrc}`)}
          alt="song"
          className="rounded w-[70px] h-[70px] object-cover mr-3  "
        />

        <div className="flex flex-col">
          <div className="text-sm text-gray-700 pb-1 sm:self-center md:self-start">
            {song.songName}
          </div>
          <div className="text-sm text-gray-500  pb-3 sm:self-center md:self-start">
            {song.singer}
          </div>
        </div>
      </Link>
    </div>
  );
};
