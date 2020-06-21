import React, { useState, useEffect } from "react";
import SongList from "./SongList";
import { Link } from "react-router-dom";

const Song = ({ name, artist, image, category, scheme }) => {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        cursor: "pointer",
        maxHeight: "100px",
        overflow: "hidden",
      }}
      className="row m-4  text-dark rounded ml-md-5"
    >
      <div style={{}} className="col-1">
        <p>
          <img
            style={{}}
            className="img-md-thumbnail mt-3"
            src={image.label}
          ></img>
        </p>
      </div>

      <div style={{}} className="col-5 mt-3 text-center nm">
        <span>{name.label.substr(0, 25)}</span>
        <p id="cat">
          Category - {""}
          <a href={scheme}>{category.label}</a>
        </p>
      </div>

      <div id="art" style={{}} className="col-4 mt-3">
        Artist - <span className="font-italic">{artist.label}</span>
      </div>
      <div id="pb" style={{}} className="col-2">
        <img
          style={{ height: "50px", marginLeft: "0px" }}
          className="mt-3"
          src={require("../assets/play-button.svg")}
        />
      </div>
    </div>
  );
};

export default Song;
