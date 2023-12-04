import React, {useState, useEffect, useContext} from 'react'
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer"
import axios from 'axios';
import "../styles/cart.css"
import { UserContext } from "../context/UserContext";
import "primeicons/primeicons.css";
import { CartContext } from "../context/CartContext";
import {Link} from "react-router-dom"

const Cart = () => {
  const [emptyCart, setEmptyCart] = useState("")
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]); 
  const {updateCartQuantity, removeFromCart, totalPrice} = useContext(CartContext)
  console.log(products)
  const findCart = async () => {
    try {
      const response = await axios.get(`https://ecommerce-server-hrcv.onrender.com/api/cart/user/${user._id}`);
      console.log(response.data);
      if (response.status === 200){ 
        console.log("Cart found", response.data)
        setProducts(response.data.products)
      }
    } catch (err) {
      setEmptyCart("Your Cart is Empty") 
    } finally {
        }
  };
      
  useEffect(() => {
    findCart();
  }, [user]);


  const addOne = async (productId) => {
    await updateCartQuantity(productId, 1);
    await findCart()
  };


  const removeOne = async (productId) => {
    await updateCartQuantity(productId, -1);
    await findCart()
  };


  const deleteItem = async (productId) => {
      await removeFromCart(productId);
      await findCart()
  };

 
      const continueShop = () => {
        console.log("Continue Button Clicked");
      };
      
      const proceedCheck = () => {
        console.log("Proceed Button Clicked");
      };

    


  return (
    <>
      <Navigation />
      {products.length ? (
        
       <>
        <Link to="/shop"><div> <button className="continueBtnTop" onClick={continueShop}> ← CONTINUE SHOPPING </button></div></Link> 

         {products.map((product, index) => {
          return (
            <div  key={index} className='cartContainerComponent'>
            <div className="cart">
            <img src={product.productId.image}></img>
            <p className="productTitle">{product.productId.title}</p>
            <p className="productColor">Color: {product.productId.color}</p>
            <p className="productPrice">{product.productId.price} €</p> 
            <div className="cartQuantityButtons">
            <button className="adjustmentBtn" disabled={product.quantity === 1} onClick={() => removeOne(product.productId._id)}> - </button>
              <p>Qty: {product.quantity}</p>
              <button className="adjustmentBtn" onClick={() => addOne(product.productId._id)}> + </button>
              <button className="deleteBtn" value={product.quantity} onClick={() => deleteItem(product.productId._id)}> Remove from Cart </button>
           </div>
            </div>
            <hr/>
            
             </div>
            
          );
        })
      }
      
       <div className="total-price">
      
          <p>Total: {totalPrice} </p>
          <p>€</p>
          

          
        </div>
        <div className='bottomButtons'>
          
          {/* <NavLink to="/home"> */}
          <Link to="/checkout"><button className="proceedBtn" onClick={proceedCheck}> PROCEED TO CHECKOUT →</button></Link>
            {/* </NavLink> */}
        </div>
       </>
      ) : <>      <Link to="/shop"><div> <button className="continueBtnTop" onClick={continueShop}> ← START SHOPPING </button></div></Link> 
      <p className='cartEmptyMsg'>Your Cart is Empty</p><br/><br/></>}

      <Info />
      <Footer />
    </>
  );
}




export default Cart;

