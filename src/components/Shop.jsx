import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navigation from '../elements/Navigation';
import Search from '../elements/Search';
import Info from '../elements/Info';
import Footer from '../elements/Footer';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/shop.css"

// import * as ReactBootstrap from "react-bootstrap";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState(false)


  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://ecommerce-server-hrcv.onrender.com/api/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fireSearch = () => {
    setSearch(true)
  };

  const showAll = () => {
    setSearch(false)
  };


  return (
    <>
      <Navigation />
      <div className="shopBtns">
      <button onClick={fireSearch} className="shopBtn">Search for a product</button>   
      <button onClick={showAll}className="shopBtn">Show All</button> 
      </div>
      {search ?    <Search /> :  <div className="cardContainer">
        {products.map((product, index) => {
          return (
            <Card className="card" key={index}>
              <Link
                className="link"
                key={index}
                to={`/products/${product._id}`}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">
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
 }
      <Info />
      <Footer />
    </>
  );
}

export default Shop
