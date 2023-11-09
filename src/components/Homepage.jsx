import React from "react";
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import CarouselElement from "../elements/CarouselElement";
import "../styles/homepage.css"

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <Navigation />
      <>
        <header>
          <section>
            <img
              src="https://github.com/obisaga/ecommerceImages/blob/main/free%20stock%20images/pexels-cottonbro-studio-9428788.jpg?raw=true"
              alt="header-cover"
              className="header-image"
            />
          </section>
        </header>
        <section className="collections">
          <span className="collections-header">COLLECTIONS</span>
          <CarouselElement />
          <button>SHOP NOW</button>
        </section>
        <section className="about-us">
          <p className="aboutus-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <img
            src="https://github.com/obisaga/ecommerceImages/blob/main/free%20stock%20images/pexels-tima-miroshnichenko-6262835.jpg?raw=true"
            alt="some image"
            className="about-image"
          />
        </section>
        <section className="guarantees">
          <section>
            <i className="pi pi-truck"></i>
            <span>FREE SHIPPING ON ALL ORDERS</span>
          </section>
          <section>
            <i className="pi pi-globe"></i>
            <span>WORLDWIDE DELIVERY</span>
          </section>
          <section>
            <i className="pi pi-money-bill"></i>
            <span>SAFE AND SECURE PAYMENTS</span>
          </section>
        </section>
        <section className="info">
          <section className="customer-service">
            <span className="title">CUSTOMER SERVICE</span>
            <a href="">FAQ</a>
            <a href="">TERMS AND CONDITIONS</a>
            <a href="">RETURNS AND SHIPPING</a>
            <a href="">PRIVACY POLICY</a>
            <a href="">COOKIES</a>
          </section>
          <section className="about">
            <span className="title">ABOUT</span>
            <a href="">ABOUT US</a>
            <a href="">CONTACT</a>
            <span className="info-icons">
              <a href="https://www.instagram.com/">
                <i className="pi pi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="pi pi-facebook"></i>
              </a>
            </span>
          </section>
          <section className="newsletter">
            <span className="title">NEWSLETTER</span>
            <span className="newstext">
              SIGN UP AND RECEIVE UPDATES FROM US!
            </span>
            <input type="text" placeholder="Your e-mail" />
            <button>SUBSCRIBE</button>
          </section>
        </section>
      </>
      <Footer />
    </div>
  );
};

export default Homepage;
