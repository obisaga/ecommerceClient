import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel';


const CarouselElement = () => {
  return (
    <>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide"  width="25%"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide"  width="25%"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide" width="25%" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/image-not-found.svg" text="First slide"  width="25%"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default CarouselElement