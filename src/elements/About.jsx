import React from 'react'
import "../styles/about.css"

const About = () => {
  return (
    <div id="aboutSection">
      <section className="about-us">
        <p className="aboutus-text">
        The jewelry shop is a charming boutique that specializes in offering a diverse and exquisite collection of fine jewelry. <br />
        Whether in search of a bold statement piece or a subtle everyday accessory, <br />
        the modern jewelry boutique is the ultimate destination for those who value the creativity and innovation of handmade adornments.
        </p>
        <img
          src="https://github.com/obisaga/ecommerceImages/blob/main/free%20stock%20images/pexels-tima-miroshnichenko-6262835.jpg?raw=true"
          alt="some image"
          className="about-image"
        />
      </section>
    </div>
  );
}

export default About