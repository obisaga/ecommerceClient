import React, {useState, useEffect} from 'react'
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer"
import axios from 'axios';
import "../styles/cart.css"

const Cart = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState({})

    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cart/${id}`);
        console.log(response.data);
        setCart(response.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchCart();
    }, []);
  return (
    <>
      <Navigation />

      <div className="cart-container">
        <div className="cart-wrapper">
          <div className="product-info">
            <button className='btn-delete'> x </button>
            <img src={product.image} alt={product.title} />
            <p className="product-details">
              <span className="product-title">Title: Ring</span>
              <span className="product-size">Size: 1</span>
              <span className="product-color">Color: silver</span>
            </p>
          </div>
          <div className="product-quantity">
            <button className="btn-reduce">-</button>
            <span className="quantity-desc">Quantity</span>
            <button className="btn-increase">+</button>
          </div>
          <div className="product-price">
            <span className="price">100 EUR</span>
          </div>
        </div>
        <hr />
        <div className="total-price">
          <span>TOTAL</span>
          <span>EUR</span>
        </div>
        <div className='back-checkout-btn'>
          <button className="btn-back"> CONTINUE SHOPPING </button>
          <button className="checkout"> PROCEED TO CHECKOUT </button>
        </div>
      </div>

      <Info />
      <Footer />
    </>
  );
}

export default Cart