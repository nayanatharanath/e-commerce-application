import React from "react";
import "./Offers.css";
import Carousel from "react-bootstrap/Carousel";
import offersImage from "../Assets/offers-banner.png.jpg";

const Offers = () => {
  return (
    <Carousel className="offers-banner">
      <img src={offersImage} alt="" />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel>
  );
};
export default Offers;
