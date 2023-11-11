import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/info.css"

const Info = () => {
  return (
    <div>
      <section className="info">
        <section className="customer-service">
          <span className="title">CUSTOMER SERVICE</span>
          <NavLink to="#"> FAQ </NavLink>
          <NavLink to="#"> TERMS AND CONDITIONS </NavLink>
          <NavLink to="#"> RETURNS AND SHIPPING </NavLink>
          <NavLink to="#"> PRIVACY POLICY </NavLink>
          <NavLink to="#"> COOKIES </NavLink>
        </section>
        <section className="about">
          <span className="title">ABOUT</span>
          <NavLink to="#"> ABOUT US </NavLink>
          <NavLink to="#"> CONTACT </NavLink>
          <span className="info-icons">
          <NavLink to="https://www.instagram.com/"> <i className="pi pi-instagram"></i> </NavLink>
          <NavLink to="https://www.facebook.com/"> <i className="pi pi-facebook"></i> </NavLink>
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
