import React from "react";
import "./NewsLetter.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const NewsLetter = () => {
  return (
    <div className="newsLetter">
      <h2>Get Exclusive offers on your email</h2>
      <p>Subcribe to our news letter and stay updated</p>
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter email"
            type="email"
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            Subcribe
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default NewsLetter;
