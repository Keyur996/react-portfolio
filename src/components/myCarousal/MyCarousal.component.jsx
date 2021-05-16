import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide3 from "../../assets/images/carousal/slide3.webp";
import { ScrollDown } from "../scroll-down/ScrollDown.component";
import "./MyCarousal.styles.css";

export const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel
        controls={false}
        indicators={false}
        interval={2500}
        pause={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};
