import React from "react";
import "primeicons/primeicons.css";
import "../styles/navi.css";

const Navigation = () => {
  return (
    <>
      <div className="topNav">
        <span className="topnav-elements">
          <span className="social-media-icons">
            <a href="https://www.instagram.com/">
              <i className="pi pi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/">
              <i className="pi pi-facebook"></i>
            </a>
            <a href="">
              <i className="pi pi-search"></i>
            </a>
          </span>
          <span className="logo">
            <a href="">The Jewellery Shop</a>
          </span>
          <span className="user-cart-icons">
            <a href="">
              <i className="pi pi-user"></i>
            </a>
            <a href="">
              <i className="pi pi-shopping-cart"></i>
            </a>
          </span>
        </span>
      </div>
      <hr size="1" />
      <div className="bottomNav">
        <div className="links">
          <a href="">HOME</a>
          <div className="dropdown">
            <a href="" className="dropbtn">
              SHOP
            </a>
            <div className="dropdown-content">
              <a href="#">RINGS</a>
              <a href="#">NECKLACES</a>
              <a href="#">BRACELETS</a>
            </div>
          </div>
          <a href="">ABOUT US</a>
          <a href="">CONTACT</a>
          <a href="">NEWSLETTER</a>
        </div>
      </div>
     
    </>
  );
};

export default Navigation;
