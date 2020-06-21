import React, { useState, useEffect } from "react";
import Song from "./Song";
import "../App.css";
const Recent = () => {
  const API = "https://itunes.apple.com/us/rss/topalbums/limit=8/json";
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
    <div class="myBody">
      <div class="container">
        <div id="recent" class="row">
          {songs.map((song, index) => {
            return (
              <div id="cd" key={index} class="col-6 col-sm-6 col-md-4 col-lg-3">
                <div class="our-team">
                  <div class="picture">
                    <img class="img-fluid" src={song["im:image"][0].label} />
                  </div>
                  <div class="team-content">
                    <h3 class="name">{song["im:name"].label}</h3>
                    <h4 class="title">{song["im:artist"].label}</h4>
                  </div>
                  <ul class="social">
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-facebook"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-twitter"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-google-plus"
                        aria-hidden="true"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://codepen.io/collection/XdWJOQ/"
                        class="fa fa-linkedin"
                        aria-hidden="true"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recent;
