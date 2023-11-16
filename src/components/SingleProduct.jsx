import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import * as ReactBootstrap from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";

import "../styles/singleproduct.css"


const SingleProduct = (props) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const { addToCart, updateCart, updateCartQuantity } = useContext(CartContext)
  console.log(user);

  const productFetch = async () => {
    try {
      setLoading(true);
      const url = `http://localhost:3000/api/products/${id}`;
      const response = await axios.get(url);
      console.log(response.data);

      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error.message)
      setError("failed to fetch product");
    } finally {
      setLoading(false);
    }
  };


  const findCart = async (productId, quantity) => {
    try {
      console.log("Finding user's cart...");

      const url = `http://localhost:3000/api/cart/user/${user._id}`;
      const response = await axios.get(url);
      // console.log(response.data[0].products.map((product)=> product.productId._id))



      if (response.status === 204) {
        console.log("User has no carts yet, creating new cart")

        const newCartData = {
          userId: user._id,
          products: [
            { productId: product._id, quantity: 1 }
          ]
        }
        addToCart(newCartData)
      } else if (response.status === 200) {
        const IDs = response.data[0].products.map((product) => product.productId._id);
        console.log(IDs);

        const isProductIdMatch = IDs.includes(product._id);
        console.log(isProductIdMatch);

        if (isProductIdMatch === true) {
          console.log("Product already in cart");


          const targetProductId = product._id; // Replace this with the actual ID you are looking for
          const targetProduct = response.data[0].products.find((product) => product.productId._id === targetProductId);
          const newQuantity = targetProduct.quantity + 1

          console.log(newQuantity)

          updateCartQuantity(newQuantity)


          return; 
        } else if(isProductIdMatch === false){
          console.log("Cart found");

          const existingProducts = response.data[0].products;
          const addThisItem = { productId: product._id };

          // Update the cart (assuming updateCart is a function that handles this)
          updateCart(existingProducts, addThisItem);

          // Optionally, you can return or perform additional actions here
          // return;
        }
      }
    } catch (error) {
        console.log("Error", error)
      } finally {
        console.log("The end of function")
      }
  }


  
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
              <Card.Text className="about"><p>{product.description}</p></Card.Text>
              <hr />

              <Card.Text className="color"><p>Color: {product.color}</p></Card.Text>
              {/* <Card.Text className="size"><p>Sizes: {product.availability.map((product)=> <p>{product.size}  <button className="addToCart" onClick={findCart}>ADD TO CART</button></p>)}</p></Card.Text> */}
              <Card.Text className="size"><div>Sizes: {product.availability.map((product) => { product.size })}</div></Card.Text>

              <Card.Text className="price"><p>Price: {product.price} €</p></Card.Text>
              <button className="addToCart" onClick={findCart}>ADD TO CART</button>
            </Card.Body>

          </Card>

        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default SingleProduct;
