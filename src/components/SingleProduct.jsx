import React, { useState, useEffect, useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import * as ReactBootstrap from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


import "../styles/singleproduct.css"


const SingleProduct = (props) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { addToCart, updateCart, updateCartQuantity } = useContext(CartContext)

  const findCart = async (productId, quantity) => {
    try {
      console.log("Finding user's cart...");
      const url = `http://localhost:3000/api/cart/user/${user._id}`;
      await axios.get(url);
      await updateCartQuantity( product._id, 1)
    } catch (error) {
      //Logic if no cart exists yet
      if(error.request.status === 404){
         const newCartData = {
          userId: user._id,
          products: [
            { productId, quantity }
          ]
        }
        //Logic to add the product and create a new Cart
        await addToCart(newCartData)

      } else {
        console.log("Error", error.request.status)
      }
      
        
      } finally {
        console.log("The end of function")
        navigate(`/shop`);
      }
  }
  
  const productFetch = async () => {
    try {
      setLoading(true);
      const url = `http://localhost:3000/api/products/${id}`;
      const response = await axios.get(url);
      setProduct(response.data);
    } catch (error) {
      setError("failed to fetch product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productFetch();
  }, [id]);

  return (
    <div>
      <Navigation />
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null}
      {error && <div>{error}</div>}
      {Object.keys(product).length ? (
        <div className="singleProductWrapper">
          <Card className="productContainer">
            <Card.Img variant="top" className="productImg" src={product.image} />
            <Card.Body className="cardBody">
              <Card.Title className="cardTitle">{product.title}</Card.Title>
              <Card.Text className="about">{product.description}</Card.Text>
              <hr />

              <Card.Text className="color">Color: {product.color}</Card.Text>
              {/* <Card.Text className="size"><p>Sizes: {product.availability.map((product)=> <p>{product.size}  <button className="addToCart" onClick={findCart}>ADD TO CART</button></p>)}</p></Card.Text> */}
              {/* <Card.Text className="size">Sizes: {product.availability.map((product) => { product.size })}</Card.Text> */}

              <Card.Text className="price">Price: {product.price} €</Card.Text>
              <button className="addToCart" onClick={() => findCart(product._id, 1)}>ADD TO CART</button>
            </Card.Body>

          </Card>

        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default SingleProduct;
