import React from "react";
import "./Hero.css";
import heroImage from "../Assets/hero-image.png";
import Carousel from "react-bootstrap/Carousel";
import Button from 'react-bootstrap/Button';
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function Hero() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img src={heroImage} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary">Primary</Button>
        </Carousel.Caption>
       
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={heroImage} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary">Primary</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={heroImage} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="primary">Primary</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img src={heroImage} alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button href="skinCare">Primary</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    // <div className="hero">
    //   <div className="hero-left">
    //     <h2>WELCOME TO</h2>
    //     <p id="brand-name">Aromi</p>
    //     <p id="tag-line">The beauty of you</p>
    //   </div>

    //   <div className="hero-btn">
    //     <div>Show Now</div>
    //   </div>

    //   <div className="hero-right">
    //     <img src={hero_image} alt="" />
    //   </div>
    // </div>
  );
}

export default Hero;
