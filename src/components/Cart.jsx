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
    const [quantity, setQuantity] = useState(0);
    const {addToCart, updateCart} = useContext(CartContext)


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
        const arr = (product.map((product) => product.productId.price))
        const sum = arr.reduce((accumulator, object) => {
          return accumulator + object;
        }, 0);
      console.log(sum)
      setTotal(sum)
      setCount(Object.keys(product).length)
      } else {
        console.log('Counter failed')}
    }, [findCart]);



  
    const addOne = () => {
      console.log("Add Button Clicked");
      };

    const removeOne = (value) => {
      console.log(value)
        console.log("Remove One Button Clicked");
        setQuantity(quantity-1)
        const addThisItem = {productId: product._id, quantity: product.quantity}
        console.log(addThisItem)

        const selectedProduct = product._id
        // selectedProduct ? 
        //update quantity -1
        //send it to cart context function updateCart
        //if 0 - remove item from cart
     
        // updateCart(addThisItem)

  //       const updatedCart = state.cart.map((currentProduct) =>
  // currentProduct._id === productId ? { ...currentProduct, quantity } : currentProduct
  // );
      };

    const deleteItem =  () => {
        console.log("Remove Button Clicked");
      //   try {
      //     const existingProducts = product
      //  const addThisItem = {productId: button.key, quantity: 0}
         
      //  existingProducts.push(addThisItem)
      //     console.log(existingProducts)
  
      //     const pushToCart = {
      //       products: existingProducts
      //      }
      //     const updateCart = await axios.put(`http://localhost:3000/api/cart/user/${user._id}`, pushToCart)
      //     console.log("Cart updated", updateCart)
      //   }
      //   catch (error) {
      //     console.log("Error", error)
      //     } finally {
      //       console.log("The end of function")
      //     }
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
              <button className="adjustmentBtn" value={product.productId._id} onClick={removeOne(value)}> - </button>
              <p>Qty: {product.quantity}</p>
              <button className="adjustmentBtn" onClick={addOne}> + </button>
              <button className="deleteBtn"  onClick={deleteItem}> Remove from Cart </button>
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
          <h1 className="count">{count}</h1>

          
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

