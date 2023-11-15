import React, {useState, useEffect, useContext} from 'react'
import { NavLink } from "react-router-dom";
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer"
import axios from 'axios';
import "../styles/cart.css"
import { UserContext } from "../context/UserContext";
import "primeicons/primeicons.css";
import { CartContext } from "../context/CartContext";





const Cart = (props) => {
    const [product, setProduct] = useState([{message:"Cart is Empty"}]);
    
    const [total, setTotal] = useState(0);
    const { user } = useContext(UserContext);
    const [count, setCount] = useState(0);
    const [clicked, setClicked] = useState(false);
    const {addToCart, updateCart, updateCartQuantity, removeFromCart, cartCountingProducts} = useContext(CartContext)




    const findCart = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`);
        console.log(response.data);
        if(response.status === 204){
          console.log("Cart is empty")
         
        } else if (response.status === 200){ 
          console.log("Cart found")
        setProduct(response.data[0].products.map((product)=> product))
        // setQuantity(response.data[0].products.map((product)=> product.quantity))

        
        }

      } catch (err) {
        console.log(err);
      } finally {
     
          }
    };
      

    useEffect(() => {
      findCart();
    }, []);

    



    useEffect(() => {
      //sum the prices of products
      if(Object.keys(product).length>1) {
        const arr = (product.map((product) => product.productId.price * product.quantity))
        const sum = arr.reduce((accumulator, object) => {
          return accumulator + object;
        }, 0);
      console.log(sum)
      setTotal(sum)
    console.log(arr)

    const cartCounter = (product.map((product) => product.quantity))
    const sumCart = cartCounter.reduce((accumulator, object) => {
        return accumulator + object;
      }, 0);
    console.log(sumCart)



      setCount(sumCart)
      cartCountingProducts(sumCart);
      } else {
        console.log(Object.keys(product)[0])
        console.log('Counter failed')}
    }, [findCart]);


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
        const newQuantity = sum
        console.log('updated:', newQuantity);
 
         updateCartQuantity(sum, additionalValue);
         setClicked(true)

      };



    const removeOne = (event) => {
        const buttonValue = event.target.value; 
        const additionalValue = event.target.getAttribute('data-custom-value');
        const sum = parseInt(buttonValue, 10) - 1;
        console.log('ProductId:', additionalValue, 'Qty:', sum);
        const newQuantity = sum
        console.log('updated:', newQuantity);
 
         updateCartQuantity(sum, additionalValue);
         setClicked(true)
     
      };

      const deleteItem = (event) => {
        const idValue = event.target.getAttribute('data-custom-value');
       console.log(idValue)
         removeFromCart(idValue);
         setClicked(true)
     
      };

      // const deleteCart = (event) => {
      //   const idValue = event.target.getAttribute('data-custom-value');
       
      //    removeFromCart(idValue);
      //    setClicked(true)
     
      // };


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
      {Object.keys(product).length > 1 ? (
   
       <>
              <NavLink to="/shop"><div> <button className="continueBtnTop" onClick={continueShop}> ← CONTINUE SHOPPING </button></div></NavLink> 

         {product.map((product, index) => {
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
      ) : <><p>Cart is Empty</p>    <NavLink to="/shop"><button className="startShoppingBtn" onClick={continueShop}> ← START SHOPPING </button></NavLink></>}

      <Info />
      <Footer />
    </>
  );
}




export default Cart;

