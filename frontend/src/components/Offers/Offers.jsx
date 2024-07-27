import React from "react";
import "./Offers.css";
import Button from "react-bootstrap/Button";

const Offers = () => {
  return (
    <div className="offers-banner">
      <h1>Special Offer</h1>
      <h4>Just for you!</h4>
      <Button variant="light">Shop Now!</Button>{" "}
    </div>
  );
};
export default Offers;
