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
          <div class="dropdown">
            <a href="" class="dropbtn">
              SHOP
            </a>
            <div class="dropdown-content">
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
      <header>
        <section>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg"
            alt="header-cover"
          />
        </section>
      </header>
      <section className="collections">
        <span className="collections-header">COLLECTIONS</span>
        <br />
        <span>CAROUSEL</span>
        <br />
        <button>SHOP NOW</button>
      </section>
      <section className="about-us">
        <p className="aboutus-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg"
          alt="some image"
        />
      </section>
      <section className="guarantees">
        <span>FREE SHIPPING ON ALL ORDERS</span>
        <span>WORLDWIDE DELIVERY</span>
        <span>SAFE AND SECURE PAYMENTS</span>
      </section>
      <section>
        <section className="customer-service">
          <span>CUSTOMER SERVICE</span>
          <a href="">FAQ</a>
          <a href="">TERMS AND CONDITIONS</a>
          <a href="">RETURNS AND SHIPPING</a>
          <a href="">PRIVACY POLICY</a>
          <a href="">COOKIES</a>
        </section>
        <section className="customer-service">
          <span>ABOUT</span>
          <a href="">ABOUT US</a>
          <a href="">CONTACT</a>
          <a href="https://www.instagram.com/">
            <i className="pi pi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/">
            <i className="pi pi-facebook"></i>
          </a>
        </section>
        <section className="customer-service">
          <span>NEWSLETTER</span>
          <span>SIGN UP AND RECEIVE UPDATES FROM US!</span>
          <input type="text" placeholder="Your e-mail" />
          <button>SUBSCRIBE</button>
        </section>
      </section>
    </>
  );
};

export default Navigation;
