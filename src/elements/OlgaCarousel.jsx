import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/olgacarousel.css"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

//when we will have all images ready we can then eventually put them in database and then fetch so urls won't be hardcoded

const sliderImageUrl = [
  //First image url
  {
    url:
      "https://github.com/obisaga/ecommerceImages/blob/main/Rings/1.png?raw=true"
  },
  {
    url:
      "https://github.com/obisaga/ecommerceImages/blob/main/Rings/9.png?raw=true"
  },

  {
    url:
      "https://github.com/obisaga/ecommerceImages/blob/main/Rings/6.png?raw=true"
  },

  {
    url:
      "https://github.com/obisaga/ecommerceImages/blob/main/Rings/2.png?raw=true"
  },
 
  {
    url:
      "https://github.com/obisaga/ecommerceImages/blob/main/Rings/AI_Generated_Image.jpeg?raw=true"
  }
];

const OlgaCarousel = () => {
  return (
    <div className="parent">

     <p>Recently Added</p>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="products" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default OlgaCarousel;
