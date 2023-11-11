import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import * as ReactBootstrap from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const SingleProduct = (props) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([])

  const { id } = useParams();
  const { user } = useContext(UserContext);
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
      console.log(response)
      const existingCartData = response.data
      console.log("User's cart found:", existingCartData);

      //send data about userId, products (productId and quantity) to be able to update cart
      if (response.status === 200) {    
        //Update the cart data
        // const updatedCartData = {
        //   userId: user._id,
        //   products: existingCartData.products.map((product) =>
        //     product.productId === productId ? { ...product, quantity } : product),
        // };

        const updatedCartData = {
          userId: user._id,
          products: existingCartData,
        };

        console.log(updatedCartData)  // Empty array?

        if(updatedCartData.length > 0){
          setCart(...product, quantity)
        }else{
          setCart([])
        }


        // Send a PUT request to update the user's cart
        const updateCart = await axios.put(url, updatedCartData)  // I get 404 message - maybe smth with props in findCart? - missing cart context?
        console.log("Cart updated:", updateCart.data)
      
      } else {
        //send data about userId, products (productId and quantity) to be able to create a cart if user's cart was not found
        console.log("User's cart not found. Creating a new cart...")

        const newCartData = {
          userId: user._id,
          products: [
            {
              productId,
              quantity,
            }
          ]
        }

        const createCart = await axios.post("http://localhost:3000/api/cart", newCartData);
        console.log("Cart created:", createCart.data);
        
      }
    } catch (error) {
      console.log("Error:", error.message)
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
        <Card>
          <Card.Img variant="top" src={product.image} />
          <Card.Body className="cardBody">
            <Card.Title className="cardTitle">{product.title}</Card.Title>
            <Card.Text className="about">{product.desc}</Card.Text>
          </Card.Body>
          <button className="addToCart" onClick={findCart}>
            ADD TO CART
          </button>
        </Card>
      ) : null}
      <Footer />
    </div>
  );
};

export default SingleProduct;
