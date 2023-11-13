import React, { createContext,  useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from "./UserContext"


// Create the ShopContext
export const CartContext = createContext();



// Create the ShopProvider component
const CartProvider = ({ children }) => {
    const { user } = useContext(UserContext);


//function to add a product to the cart
const addToCart = async (newCartData) => {
    console.log("Create New Cart - Context")
    const createCart = await axios.post("http://localhost:3000/api/cart", newCartData);
        console.log("Cart created:", createCart.data);

  };

//function to remove a product from the cart
const removeFromCart = () => {
  
};

//function to update the quantity of a product in the cart
const updateCart = async (existingProducts, addThisItem) => {
    console.log("Cart found - Context")
        
       
        existingProducts.push(addThisItem)
        console.log(existingProducts)

        const pushToCart = {
          products: existingProducts
         }
        
        const updateCart = await axios.put(`http://localhost:3000/api/cart/user/${user._id}`, pushToCart)
        console.log("Cart updated", updateCart)

};

//function to clear the cart - shopReducer will reset the cart to its initial state
const clearCart = () => {
   //delete endpoint
}


//add totalAmount in backend schema for cart
  //need to make endpoint for it



  const value = {
    addToCart,
    removeFromCart,
    updateCart,
    clearCart  }     

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


export default CartProvider;