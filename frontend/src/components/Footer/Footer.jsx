import React from "react";
import logo from "../Assets/logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ImInstagram } from "react-icons/im";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <img src={logo} alt="" width="50" height="50" />
          <Navbar.Brand href="/">
            <h2>Aromi</h2>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="products">Products</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link href="insta">
                <ImInstagram />
              </Nav.Link>
              <Nav.Link href="x">
                <BsTwitterX />
              </Nav.Link>
              <Nav.Link href="facebook">
                <FaFacebookSquare />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
