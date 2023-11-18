import React from "react";
import { Link } from "react-router-dom";
import "../styles/info.css"

const Info = () => {
  return (
    <div>
      <section className="info">
        <section className="customer-service">
          <span className="title">CUSTOMER SERVICE</span>
          <Link to="#"> FAQ </Link>
          <Link to="#"> TERMS AND CONDITIONS </Link>
          <Link to="#"> RETURNS AND SHIPPING </Link>
          <Link to="#"> PRIVACY POLICY </Link>
          <Link to="#"> COOKIES </Link>
        </section>
        <section className="about">
          <span className="title">ABOUT</span>
          <Link to="#"> ABOUT US </Link>
          <Link to="#"> CONTACT </Link>
          <span className="info-icons">
          <Link to="https://www.instagram.com/"> <i className="pi pi-instagram"></i> </Link>
          <Link to="https://www.facebook.com/"> <i className="pi pi-facebook"></i> </Link>
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
