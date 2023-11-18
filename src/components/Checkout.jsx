import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer"
import axios from 'axios';
import "../styles/checkout.css"


const Checkout = () => {
    const {pushOrder} = useContext(CartContext)
    const { user } = useContext(UserContext);
    const [products, setProducts] = useState([]); 
    const [amounts, setAmounts] = useState([])


    const findOrder = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`);
          console.log(response.data);
          if (response.status === 200){ 
            console.log("Order found", response.data)
            setAmounts(response.data)
            setProducts(response.data.products)
          }
        } catch (err) {
console.log("Error", err)      
  } finally {
            }
      };

    const handleClick = async () => {
        await pushOrder();
     console.log("Confirm Clicked")
    };


    useEffect(() => {
        findOrder();
      }, [user]);

  return (
    <div>
      <Navigation />
      <div>
        <h1 className="order-title">Order Summary</h1>
      </div>

      {products.map((product, index) => {
        return (
          <div key={index} className="cart-container">
            <div className="cart">
              <img className="cartImg" src={product.productId.image}></img>
              <p className="productTitle">{product.productId.title}</p>
              <p className="productColor">Color: {product.productId.color}</p>
              <p className="productPrice"> Amount: {product.quantity}</p>
              <p className="productPrice">{product.productId.price} €</p>
            </div>
            <hr />
          </div>
        );
      })}

      <div>
      <div className="total-price">
        <p>Total: {amounts.totalAmountPrice} </p>
        <p>€</p>
      </div>
      <div className="total-price">
        <p>Products: {amounts.totalAmount}</p>
      </div>

      <button className="confirmBtn" onClick={handleClick}>Confirm Order</button>

      </div>
    
      <Info />
      <Footer />
    </div>
  );
}

export default Checkout