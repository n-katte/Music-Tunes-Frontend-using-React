import React, { useState, useEffect } from "react";
import Song from "./Song";
import Recent from "./Recent";
const SongList = () => {
  const API = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";
  const [songs, setSongs] = useState([]);

  const [search, setSearch] = useState("");
  const handleChange = (name) => (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSongs = () => {
    return fetch(`${API}`, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .catch((error) => console.log(error));
  };

  const loadSongs = () => {
    getSongs().then((data) => {
      setSongs(data.feed.entry);
    });
  };

  useEffect(() => {
    loadSongs();
  }, []);

  return (
    <div className="">
      <input
        type="text"
        onChange={handleChange("name")}
        placeholder="Search song name or Category or Artist here"
        className="rounded-pill col-10 offset-1 mt-5 mb-3 pl-sm-4 p-3"
        style={{ outline: "none" }}
      />
      {songs.map((song, index) => {
        if (
          search != "" &&
          song["im:name"].label.toLowerCase().indexOf(search.toLowerCase()) ===
            -1 &&
          song["im:artist"].label
            .toLowerCase()
            .indexOf(search.toLowerCase()) === -1 &&
          song.category.attributes.label
            .toLowerCase()
            .indexOf(search.toLowerCase()) === -1
        ) {
          return null;
        }

        return (
          <div className="ml-2 " key={index}>
            <Song
              name={song["im:name"]}
              artist={song["im:artist"]}
              image={song["im:image"][0]}
              category={song.category.attributes}
              scheme={song.category.attributes.scheme}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SongList;
