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

const Cart = (props) => {
    const [products, setProducts] = useState([]);
    const [emptyCart, setEmptyCart] = useState("")
    const [total, setTotal] = useState(0);
    const { user } = useContext(UserContext);
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const {addToCart, updateCart, updateCartQuantity, removeFromCart, cartCountingProducts, clearCart} = useContext(CartContext)


    const findCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`);
        console.log(response.data);
        if (response.status === 200){ 
          console.log("Cart found")
        setProducts(response.data.products)
        // setQuantity(response.data[0].products.map((product)=> product.quantity))
        }
      } catch (err) {
        setEmptyCart("Your Cart is Empty")
        console.log(err);
      } finally {
          }
    };
      
    useEffect(() => {
      findCart();
    }, []);

    
    // useEffect(() => {
    //   //sum the prices of products
    //   if(Object.keys(productslength>1) {
    //     const arr = (product.map((product) => product.productId.price * product.quantity))
    //     const sum = arr.reduce((accumulator, object) => {
    //       return accumulator + object;
    //     }, 0);
    //   console.log(sum)
    //   setTotal(sum)
    // console.log(arr)
    //   } else {
    //     console.log(Object.keys(product)[0])
    //     console.log('Counter failed')}
    // }, [findCart]);


    useEffect(() => {
        const fetchData = async () => {
            await findCart();
        };
        if (clicked) {
            fetchData();
          // Reset the state after fetching
            setClicked(false);
        }
    }, [clicked]);
  
  
    const addOne = (event) => {
        const buttonValue = event.target.value;
        const additionalValue = event.target.getAttribute('data-custom-value');
        const sum = parseInt(buttonValue, 10) + 1;
        console.log('ProductId:', additionalValue, 'Qty:', sum);
        const newQuantity = parseInt(sum, 10);

        if (!isNaN(newQuantity)) { // Check if updatedProducts is a valid number
          console.log(newQuantity, "it is a correct number");}

        console.log('updated:', newQuantity);
 
         updateCartQuantity(additionalValue, newQuantity);
         setClicked(true)
         findCart()
         cartCountingProducts();
      };



    const removeOne = (event) => {
      const buttonValue = event.target.value;
      const additionalValue = event.target.getAttribute('data-custom-value');
      const sum = parseInt(buttonValue, 10) - 1;
      console.log('ProductId:', additionalValue, 'Qty:', sum);
      const newQuantity = parseInt(sum, 10);


      console.log('updated:', newQuantity);

       updateCartQuantity(additionalValue, newQuantity);
       setClicked(true)
       findCart()
       cartCountingProducts();
      };


      const deleteItem = (event) => {
        const idValue = event.target.getAttribute('data-custom-value');
       console.log(idValue)
         removeFromCart(idValue);
         setClicked(true)
         findCart()
         cartCountingProducts();
      };

      const deleteCart = () => {
        clearCart()      
        setClicked(true)
 
        
     
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
      {/* <div> <button className="continueBtnTop" onClick={continueShop}> ← CONTINUE SHOPPING </button></div> */}
      {products.length ? (
        
       <>
              <Link to="/shop"><div> <button className="continueBtnTop" onClick={continueShop}> ← CONTINUE SHOPPING </button></div></Link> 

         {products.map((product, index) => {
          return (
            <div  key={index}>
            <div className="cart">
            <img src={product.productId.image}></img>
            <p>{product.productId._id} , {product._id}, {product.quantity}, {product.productId.title}</p>
            <p >Color: {product.productId.color}</p>
            <p >{product.productId.price} €</p> 
            <div className="cartQuantityButtons">
            <button className="adjustmentBtn" value={product.quantity} data-custom-value={product.productId._id} onClick={removeOne}> - </button>
              <p>Qty: {product.quantity}</p>
              <button className="adjustmentBtn" value={product.quantity} data-custom-value={product.productId._id} onClick={addOne}> + </button>
              <button className="deleteBtn" value={product.quantity} data-custom-value={product.productId._id} onClick={deleteItem}> Remove from Cart </button>
           </div>
            </div>
             <hr/>
             </div>
          );
        })
      }
      <button className="deleteBtnAll" onClick={deleteCart}> Clear Cart</button>
       <div className="total-price">
          <p>Total: {total} </p>
          <p>€</p>
          

          
        </div>
        <div className='bottomButtons'>
          
          {/* <NavLink to="/home"> */}
            <button className="proceedBtn" onClick={proceedCheck}> PROCEED TO CHECKOUT →</button>
            {/* </NavLink> */}
        </div>
       </>
      ) : <><p>{emptyCart}</p>    <Link to="/shop"><button className="startShoppingBtn" onClick={continueShop}> ← START SHOPPING </button></Link></>}

      <Info />
      <Footer />
    </>
  );
}




export default Cart;

