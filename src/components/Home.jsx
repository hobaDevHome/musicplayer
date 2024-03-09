import React from "react";
import Header from "./Header";
import Gallery from "./Gallery";

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
];

const Home = () => {
  return (
    <div>
      <Header />
      <Gallery data={data} />
    </div>
  );
};

export default Home;
