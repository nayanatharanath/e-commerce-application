import { React, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart-icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="" width="50" height="50" />
        <h2>Aromi</h2>
      </div>
      {/* <div className="nav-logo-text">
        <p>The beauty of you</p>
      </div> */}
      <div>
        <ul className="nav-menu">
          <li onClick = {()=>{setMenu("shop")}}>Home{menu==='shop'?<hr/>:<></>}</li>
          <li onClick = {()=>{setMenu("skincare")}}>Skincare{menu==='skincare'?<hr/>:<></>}</li>
          <li onClick = {()=>{setMenu("haircare")}}>Haircare{menu==='haircare'?<hr/>:<></>}</li>
          <li onClick = {()=>{setMenu("makeup")}}>Makeup{menu==='makeup'?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cartIcon} alt="" width="50" height="50" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
