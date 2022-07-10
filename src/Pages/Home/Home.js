import React from "react";
import Banner from "./Banner";
import "./Home.css";
import PinnedPost from "./PinnedPost";
import Recent from "./Recent";

const Home = () => {
  return <div className="home">
    <Banner></Banner>
    <PinnedPost></PinnedPost>
    <Recent></Recent>
  </div>;
};

export default Home;
