import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/slider.css";
import "primeicons/primeicons.css";

const Slider = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const length = 3

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const nextSlide = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const prevSlide = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  //   const responsive = {
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 3,
  //       slidesToSlide: 3, // optional, default to 1.
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 2,
  //       slidesToSlide: 2, // optional, default to 1.
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //       slidesToSlide: 1, // optional, default to 1.
  //     },
  //   };

  return (
    <>
      <section className="collections">
        <span className="collections-header">COLLECTIONS</span>

        {products.map((product, index) => {
          return (
            <>
              <div className="carousel" key={index + 1} slide={index}>
                <span className="pi pi-angle-left" onClick={prevSlide}></span>
                <img src={product.image} alt="image" />
                <p>{product.title}</p>
              </div>
              <div>
                <img src={product.image} alt="image" />
                <p>{product.title}</p>
              </div>
              <div>
                <img src={product.image} alt="image" />
                <p>{product.title}</p>
                <span className="pi pi-angle-right" onClick={nextSlide}></span>
              </div>
            </>
          );
        })}
        <button>SHOP NOW</button>
      </section>
    </>
  );
};

export default Slider;
