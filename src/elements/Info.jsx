import React from "react";

const Info = () => {
  return (
    <div>
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
          <span className="newstext">SIGN UP AND RECEIVE UPDATES FROM US!</span>
          <input type="text" placeholder="Your e-mail" />
          <button>SUBSCRIBE</button>
        </section>
      </section>
    </div>
  );
};

export default Info;
