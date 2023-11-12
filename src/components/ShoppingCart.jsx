import React, {useContext} from 'react';
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer";
import useShop from '../context/ShopContext';
import SingleProduct from './SingleProduct';
// import { CartContext } from '../context/CartContext';

const Cart = () => {

    // const { cart, addItemToCart, removeItemFromCart, clearCart } = useContext(CartContext);

    const {products, total } = useShop()

  return (
    <>
      <Navigation />

      <h2>SHOPPING CART</h2>

      {products.length === 0 ? <p>YOUR CART IS EMPTY</p> : products.map((product, index) => <SingleProduct {...product} key={index}/>)}

      <h4>Your shopping cart total is: {total} EUR</h4>



      {/* {products.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {products.map((product, index) => (
            <div className="cart-container" key={product.productId}>
            <div className="cart-wrapper">
              <div className="product-info">
                <button className='btn-delete'> x </button>
                <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
                <p className="product-details">
                  <span className="product-title">{product.title}</span>
                  <span className="product-size">{product.size}</span>
                  <span className="product-color">{product.color}</span>
                </p>
              </div>
              <div className="product-quantity">
                <button className="btn-reduce">-</button>
                <span className="quantity-desc">Quantity</span>
                <button className="btn-increase">+</button>
                <button onClick={() => removeItemFromCart(product.productId)}> Remove from Cart </button>
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
            

          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )} */}

      <Info />
      <Footer />
    </>
  );
};

export default Cart;
