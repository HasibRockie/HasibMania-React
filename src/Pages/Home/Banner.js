import React from "react";
import { Carousel } from "react-bootstrap";
import MediaQuery from "react-responsive";
import img1 from "./1.svg";
import img2 from "./2.svg";
import img3 from "./3.svg";
import img4 from "./4.svg";
import img5 from "./5.svg";
import img6 from "./6.svg";

const Banner = () => {
  return (
    <div className="banner">
      <Carousel fade indicators={false} controls={false}>
        <Carousel.Item interval={8000}>
          <MediaQuery minDeviceWidth={1224}>
            <img className="d-block w-100" src={img1} alt="First slide" />
          </MediaQuery>
          <MediaQuery maxWidth={1100}>
            <img className="d-block w-100" src={img4} alt="First slide" />
          </MediaQuery>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <MediaQuery minDeviceWidth={1224}>
            <img className="d-block w-100" src={img2} alt="First slide" />
          </MediaQuery>
          <MediaQuery maxWidth={1100}>
            <img className="d-block w-100" src={img5} alt="First slide" />
          </MediaQuery>
        </Carousel.Item>
        <Carousel.Item interval={8000}>
          <MediaQuery minDeviceWidth={1224}>
            <img className="d-block w-100" src={img3} alt="First slide" />
          </MediaQuery>
          <MediaQuery maxWidth={1100}>
            <img className="d-block w-100" src={img6} alt="First slide" />
          </MediaQuery>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
