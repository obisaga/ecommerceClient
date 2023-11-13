import React from "react";
import Navigation from "../elements/Navigation";
import Guarantees from "../elements/Guarantees";
import Info from "../elements/Info"
import Footer from "../elements/Footer";




const Contact = () => {

  return (
    <div className="homepageContainer">
      <Navigation />
      <>
      <p> Address info and map </p></>
      <Guarantees />
      <Info />
      <Footer />
    </div>
  );
};

export default Contact;
