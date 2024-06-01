import React from "react";
import "./homePage.scss";
import SearchBar from "../../searchBar/SearchBar";

function HomePage() {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Dream Place</h1>

          <p>ddddesfewfewfewfwefwefwefwefwefefewfewf</p>
          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>goodd</h2>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h2>goodd</h2>
            </div>
            <div className="box">
              <h1>16+</h1>
              <h2>goodd</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        image
        <img src="/bg.png"></img>
      </div>
    </div>
  );
}

export default HomePage;
