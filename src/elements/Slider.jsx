import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/slider.css";
import "primeicons/primeicons.css";
// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";

const Carousel = () => {
  const [products, setProducts] = useState([]);
  // const [index, setIndex] = useState(0);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      console.log(response.data);
      
      if (products.length === 0) {
        setError("Slider unsuccessful. No data found.")
        setProducts([]);
    } else {
        setProducts(response.data);
      }

    } catch (error) {
      console.log(error);
      setError("The request has failed");
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  // const nextSlide = () => {
  //   const newIndex = index + 1;
  //   setIndex(newIndex >= length ? 0 : newIndex);
  // };

  // const prevSlide = () => {
  //   const newIndex = index - 1;
  //   setIndex(newIndex < 0 ? length - 1 : newIndex);
  // };

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };


  return (
    <>
      <section className="collections">
        <span className="collections-header">COLLECTIONS</span>

        {error && <div>{error}</div>}
        <div>
          <Slider {...settings}>
            {products.map((product, index) => {
              return (
                <div key={index}>
                  <img src={product.image} alt="image" />
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/* <Carousel activeIndex={index} onSelect={handleSelect}>
          {products.map((product, key) => {
            <Carousel.Item key={key}>
              <img src={product.image} />
            </Carousel.Item>
          })}
        </Carousel> */}

        <button>SHOP NOW</button>
      </section>
    </>
  );
};

export default Carousel;
