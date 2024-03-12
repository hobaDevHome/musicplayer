import React, { useState } from "react";

import SongCard from "./SongCard";

import Pagination from "./Pagination";

import { Link } from "react-router-dom";

const Gallery = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(12);

  // pagination values
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  if (!data) {
    return <h2>Loading ...</h2>;
  }

  return (
    <div
      style={{
        marginTop: 60,
        marginBottom: 60,
        display: "flex",
        flexDirection: "row",
        flex: 1,
        overflow: "auto",
        backgroundColor: "#F2F4F8",
      }}
    >
      <div
        style={{
          flex: 1,
          margin: 10,
          padding: 20,
        }}
      >
        {currentRecords.length > 0 ? (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat( auto-fit, minmax(220px, 1fr) )",
              }}
            >
              {currentRecords.map((song) => {
                return (
                  <Link
                    key={song.id}
                    to={`/songs/${song.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <SongCard song={song} />
                  </Link>
                );
              })}
            </div>
            <div className="container mt-1 pb-3">
              <Pagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </>
        ) : (
          <div className="w-full h-full flex justify-center items-center p-10 m-0">
            <span class="loader"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
