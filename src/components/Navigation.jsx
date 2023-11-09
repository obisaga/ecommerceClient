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
            <i className="pi pi-instagram" style={{ color: "black" }}></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="pi pi-facebook" style={{ color: "black" }}></i>
          </a>
          <a href="">
            <i className="pi pi-search" style={{ color: "black" }}></i>
          </a>
        </span>

        <span className="logo">
          <a href="">The Jewellery Shop</a>
        </span>

        <span className="user-cart-icons">
          <a href="">
            <i className="pi pi-user" style={{ color: "black" }}></i>
          </a>
          <a href="">
            <i className="pi pi-shopping-cart" style={{ color: "black" }}></i>
          </a>
        </span>

        </span>
      </div>

      <hr size="1" />
      
      <div className="bottomNav">
        <div className="links">
          <a href="">Home</a>

          <div class="dropdown">
            <a href="" class="dropbtn">
              Shop
            </a>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <a href="">About Us</a>
          <a href="">Contact</a>
          <a href="">Newsletter</a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
