import React from "react";
import YouTube, { Options } from "react-youtube";
import Carousel from "../../Components/Carousel/Carousel";
import "./Home.css";
import logo from "../../images/logo.svg";

function Home() {
  const opts: Options = {
    height: "1080",
    width: "1920",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      mute: 1,
    },
  };
  return (
    <div className="Home">
      <div className="video-container">
        <YouTube videoId="mtBnP249yLc" opts={opts} />
      </div>
      <div className="carousel-container">
        <Carousel w="100%" h="100%" />
      </div>
      <div className="bottom-container">
        <img src={logo} className="home-logo" alt="arcadia" />
      </div>
    </div>
  );
}

export default Home;
