import React from "react";
import SongList from "./SongList";
import Navbar from "./Navbar";
import Recent from "./Recent";

const Home = () => {
  return (
    <React.Fragment>
        <Recent></Recent>
      <Navbar></Navbar>
      <div className="  row">
        <div className=" col-md-9 offset-md-2 col-sm-12 bg-dark">
          <div className="contaner ">
            <div className="row">
              <div style={{boxShadow: "0px 0px 172px -9px rgba(24,32,69,1)"}}className="col-12">
                <SongList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
