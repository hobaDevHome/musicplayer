// @ts-nocheck
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

import React, { useEffect, useState } from "react";
import SongDetails from "./components/SongDetails";

import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [musicList, setMusicList] = useState([]);
  const [showList, setShowList] = useState([]);
  const [playingSongId, setplayingSongId] = useState("");

  const getTracks = async () => {
    const response = await getDocs(collection(db, "tracks"));
    let list = response.docs.map((data) => {
      return { ...data.data(), id: data.id };
    });

    setMusicList(list);
    setShowList(list);
  };

  useEffect(() => {
    getTracks();
  }, []);

  const getSearchtext = (search) => {
    let temp = [...musicList];
    let output = temp.filter(
      (e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.singer.toLowerCase().includes(search.toLowerCase())
    );

    setShowList(output);
  };

  const changesong = (songId) => {
    setplayingSongId(songId);
  };
  if (!musicList) {
    return;
  }
  return (
    <div className=" flex flex-col justify-between w-screen h-screen m-0 p-0 ">
      <Header getSearchtext={getSearchtext} />
      <Routes>
        <Route index element={<Gallery data={showList} />} />

        <Route
          path="/songs/:id"
          element={<SongDetails songs={musicList} changesong={changesong} />}
        />
      </Routes>

      <Footer data={musicList} songId={playingSongId} />
    </div>
  );
}

export default App;
