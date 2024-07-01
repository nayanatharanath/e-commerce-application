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

function Navigationbar() {
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
    // <div className="nav-bar">
    //   <div className="nav-logo">
    //     <img src={logo} alt="" width="50" height="50" />
    //     <h2>Aromi</h2>
    //   </div>
    //   {/* <div className="nav-logo-text">
    //     <p>The beauty of you</p>
    //   </div> */}
    //   <div>
    //     <ul className="nav-menu">
    //       <li onClick = {()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to="/">Home</Link>{menu==='home'?<hr/>:<></>}</li>
    //       <li onClick = {()=>{setMenu("skincare")}}><Link style={{textDecoration: 'none'}} to="/skinCare">Skincare</Link>{menu==='skincare'?<hr/>:<></>}</li>
    //       <li onClick = {()=>{setMenu("haircare")}}><Link style={{textDecoration: 'none'}} to="/hairCare">Haircare</Link>{menu==='haircare'?<hr/>:<></>}</li>
    //       <li onClick = {()=>{setMenu("makeup")}}><Link style={{textDecoration: 'none'}} to="/makeUp">Makeup</Link>{menu==='makeup'?<hr/>:<></>}</li>
    //     </ul>
    //   </div>
    //   <div className="nav-login-cart">
    //     <Link to="/login"><button>Login</button></Link>
    //     <Link to="/cart"><img src={cartIcon} alt="" width="50" height="50" /></Link>
    //     <div className="nav-cart-count">0</div>
    //   </div>
    // </div>
  );
}

export default Navigationbar;
