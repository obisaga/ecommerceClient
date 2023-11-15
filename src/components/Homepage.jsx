import React from "react";
import Navigation from "../elements/Navigation";
import Header from "../elements/Header";
import About from "../elements/About";
import Guarantees from "../elements/Guarantees";
import Info from "../elements/Info"
import Footer from "../elements/Footer";
import Slider from "../elements/Slider";


import "../styles/homepage.css"


const Homepage = () => {

  return (
    <div className="homepageContainer">
      <Navigation />
      <Header />
      <Slider/>
      <About />
      <Guarantees />
      <Info />
      <Footer />
    </div>
  );
};

export default Homepage;
