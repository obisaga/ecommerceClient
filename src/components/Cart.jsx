import React, {useState, useEffect} from 'react'
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer"
import axios from 'axios';
import "../styles/cart.css"

const Cart = () => {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState({
        products: [
            {
              productId: product.id,
              quantity: product.availabiliy,
            },
          ]
    })

    const addProduct = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/cart");
        console.log(response.data);
  
        setCart(response.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      addProduct();
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

// export default Cart

// import React, { useContext } from 'react';
// import Navigation from "../elements/Navigation";
// import Info from "../elements/Info";
// import Footer from "../elements/Footer"
// import { CartContext } from '../context/CartProvider';

// const Cart = () => {
//   const { cart, removeItem } = useContext(CartContext);
//   console.log(cart, 'cart')

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.length ? cart.map(item => (
//           <li key={item._id}>
//             {item.name} - Quantity: {item.quantity}
//             <button onClick={() => removeItem(item._id)}>Remove item</button>
//           </li>
//         )) : <p>Your cart is empty</p>}
//       </ul>
//     </div>
//   );
// }

export default Cart;