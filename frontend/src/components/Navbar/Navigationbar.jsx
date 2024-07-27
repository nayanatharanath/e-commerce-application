import { React, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart-icon.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

const Navigationbar = () => {
  // const [menu, setMenu] = useState("home");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img src={logo} alt="" width="50" height="50" />
        <Navbar.Brand href="/">
          <h2>Aromi</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="skinCare">Skincare</Nav.Link>
            <Nav.Link href="hairCare">Haircare</Nav.Link>
            <Nav.Link href="makeUp">Makeup</Nav.Link>
          </Nav>
          <Button href="login" variant="outline-secondary">
            Login
          </Button>
        </Navbar.Collapse>
        <div className="nav-login-cart">
          <Link to="/cart">
            <img src={cartIcon} alt="" width="50" height="50" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
