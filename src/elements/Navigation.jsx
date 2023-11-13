import React from "react";
import "primeicons/primeicons.css";
import "../styles/navi.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <>
   
      <div className="topNav">
        <span className="topnav-elements">
          <span className="social-media-icons">
            <NavLink to="https://www.instagram.com/">
              <i className="pi pi-instagram"></i>
            </NavLink>
            <NavLink to="https://www.facebook.com/">
              <i className="pi pi-facebook"></i>
            </NavLink>
            <NavLink to="/shop">
              <i className="pi pi-search"></i>
            </NavLink>
          </span>
          <span className="logo">
            <NavLink to="/home" style={{ textDecoration: "none", color: "black" }}>The Jewellery Shop</NavLink>
          </span>
          <span className="user-cart-icons">
            <NavLink to="/login">
              <i className="pi pi-user"></i>
            </NavLink>
            <NavLink to="/account">
              <i className="pi pi-cog"></i>
            </NavLink>
            <NavLink to="/cart">
              <i className="pi pi-shopping-cart"></i>
            </NavLink>
          </span>
        </span>
      </div>
      <hr size="1" />
      <div className="bottomNav">
        <div className="links">
          <NavLink to="/home">HOME</NavLink>
          <div className="dropdown">
            <NavLink to="/shop" className="dropbtn">SHOP</NavLink>
            <div className="dropdown-content">
              <NavLink to="/shop">RINGS</NavLink>
              <NavLink to="/shop">NECKLACES</NavLink>
              <NavLink to="/shop">BRACELETS</NavLink>
            </div>
          </div>
          <NavLink to="">ABOUT US</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="">NEWSLETTER</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
