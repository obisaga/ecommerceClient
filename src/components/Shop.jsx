import React, {useState, useEffect} from 'react'
import Navigation from '../elements/Navigation';
import Info from '../elements/Info';
import Footer from '../elements/Footer';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/shop.css"
import useShop from '../context/ShopContext';
// import * as ReactBootstrap from "react-bootstrap";

const Shop = () => {

  const {dispatch} = useShop()
  console.log(dispatch)

  //missing logic


  return (
    <>
      <Navigation />

      <div className="cardContainer">
        {dispatch.map((product, index) => {
          return (
            <Card className="card" key={index}>
              <Link
                className="link"
                key={index}
                to={`/products/${product._id}`}
              >
                <Card.Body>
                  <Card.Title>
                    <p>{product.title}</p>
                  </Card.Title>
                  <Card.Img
                    variant="bottom"
                    className="cardImg"
                    src={product.image}
                  />
                </Card.Body>
              </Link>
            </Card>
          );
        })}
      </div>

      <Info />
      <Footer />
    </>
  );
}

export default Shop
