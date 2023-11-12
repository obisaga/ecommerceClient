import React from "react";
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer";
import useShop from "../context/ShopContext";
import { NavLink } from "react-router-dom";

const ShoppingCart = ({cart}) => {

// missing logic ???

const {addToCart, removeFromCart, updateQuantity, clearCart, calculateTotal} = useShop()

  return (
    <>
      <Navigation />

      <h2>SHOPPING CART</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((product, index) => (
            <div className="cart-container" key={index}>
              <div className="cart-wrapper">
                <div className="product-info">
                  <button className="btn-delete" onClick={() => removeFromCart(product.productId)}> x </button>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="product-details">
                    <span className="product-title">{product.title}</span>
                    <span className="product-size">{product.size}</span>
                    <span className="product-color">{product.color}</span>
                  </p>
                </div>
                <div className="product-quantity">
                  <button className="btn-reduce" onClick={() => handleDecrease(product.productId)} > - </button>
                  <span className="quantity-desc"> QUANTITY: {updateQuantity} </span>
                  <button className="btn-increase" onClick={() => handleIncrease(product.productId)} > + </button>
                </div>
                <div className="product-price">
                  <span className="price">{product.price} EUR</span>
                </div>
              </div>
              <hr />
            </div>
          ))}
          <div className="total-price">
            <span>TOTAL: {calculateTotal} EUR</span>
          </div>
          <div className="back-checkout-btn">
            <NavLink to="/shop"><button className="btn-back" onClick={addToCart}> CONTINUE SHOPPING </button></NavLink>
            <NavLink to="/home"><button className="checkout"> PROCEED TO CHECKOUT </button></NavLink>
          </div>
          <button onClick={clearCart} className="btn-clear-cart">EMPTY CART</button>
        </div>
      )}

      <Info />
      <Footer />
    </>
  );
};

export default ShoppingCart;
