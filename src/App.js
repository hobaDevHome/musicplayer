import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";

import React from "react";
import SongDetails from "./components/SongDetails";

const data = [
  {
    id: "1",
    songName: "ansak1",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
  {
    id: "2",
    songName: "yehonsh2",
    singer: "shayda",
    composer: "si abdo",
    duration: 70,
    keywords: ["romance", "happy"],
    imgsrc: "shadia.jpg",
  },
  {
    id: "3",
    songName: "ansak3",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
  {
    id: "4",
    songName: "yehonsh4",
    singer: "shayda5",
    composer: "si abdo",
    duration: 70,
    keywords: ["romance", "happy"],
    imgsrc: "shadia.jpg",
  },
  {
    id: "5",
    songName: "ansak6",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
  {
    id: "4",
    songName: "yehonsh4",
    singer: "shayda5",
    composer: "si abdo",
    duration: 70,
    keywords: ["romance", "happy"],
    imgsrc: "shadia.jpg",
  },
  {
    id: "5",
    songName: "ansak6",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
  {
    id: "4",
    songName: "yehonsh4",
    singer: "shayda5",
    composer: "si abdo",
    duration: 70,
    keywords: ["romance", "happy"],
    imgsrc: "shadia.jpg",
  },
  {
    id: "5",
    songName: "ansak6",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
  {
    id: "4",
    songName: "yehonsh4",
    singer: "shayda5",
    composer: "si abdo",
    duration: 70,
    keywords: ["romance", "happy"],
    imgsrc: "shadia.jpg",
  },
  {
    id: "5",
    songName: "ansak6",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
  {
    id: "4",
    songName: "yehonsh4",
    singer: "shayda5",
    composer: "si abdo",
    duration: 70,
    keywords: ["romance", "happy"],
    imgsrc: "shadia.jpg",
  },
  {
    id: "5",
    songName: "ansak6",
    singer: "Om Kulthom",
    composer: "Baleegh Hamdy",
    duration: 180,
    keywords: ["romance", "sad"],
    imgsrc: "elsett2.jpg",
  },
];

function App() {
  return (
    <div className=" flex flex-col justify-between w-screen h-screen m-0 p-0 ">
      <Header />
      <Routes>
        <Route index element={<Gallery data={data} />} />

        <Route path="/songs/:id" element={<SongDetails songs={data} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
