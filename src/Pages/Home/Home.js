import React from "react";
import AboutMe from "./AboutMe";
import AboutWebsite from "./AboutWebsite";
import Banner from "./Banner";
import "./Home.css";
import PinnedPost from "./PinnedPost";
import Recent from "./Recent";

const Home = () => {
  return <div className="home">
    <Banner></Banner>
    <AboutMe></AboutMe>
    <AboutWebsite></AboutWebsite>
    <PinnedPost></PinnedPost>
    <Recent></Recent>
  </div>;
};

export default Home;
