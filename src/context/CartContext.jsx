import React, { createContext,  useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from "./UserContext"


// Create the ShopContext
export const CartContext = createContext();



// Create the ShopProvider component
const CartProvider = ({ children }) => {
    const { user } = useContext(UserContext);
    const [numberofProducts, setNumberofProducts] = useState(0); // Assuming it's initially 0



//function to add a product to the cart
const addToCart = async (newCartData) => {
    console.log("Create New Cart - Context")
    const createCart = await axios.post("http://localhost:3000/api/cart", newCartData);
        console.log("Cart created:", createCart.data);

  };


//function to update the quantity of a product in the cart
const updateCart = async (existingProducts, addThisItem) => {
    try{console.log("Cart found - Context")  
    existingProducts.push(addThisItem)
        console.log(existingProducts)

        const pushToCart = {
          products: existingProducts
         }
        
        const updateCart = await axios.put(`http://localhost:3000/api/cart/user/${user._id}`, pushToCart)
        console.log("Cart updated", updateCart)
    }
    
      catch (error) {
            console.error("Error updating cart quantity:", error);
    }
};


const updateCartQuantity = async (newQuantity, additionalValue) => {
    try {
        const findCart = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`)
        // console.log(findCart.data[0].products, "FIND CART")
    // const existingCart = findCart.data[0].products
        // Create an array with the existing products and the new product
    const updatedProducts = [
        { newQuantity: newQuantity }
    ];
    // const updatedProducts = newQuantity
    
    // Update the cart on the backend
    const updateCart = await axios.put(`http://localhost:3000/api/cart/user/${user._id}/${additionalValue}`, updatedProducts);
    
    console.log("Cart updated", updateCart.data.message);

    } catch (error) {
        console.error("Error updating cart quantity:", error);
}
};


const removeFromCart = async (idValue) => {
    console.log(idValue, "Cart found - Context")  
    const updateQty = await axios.put(`http://localhost:3000/api/cart/user/${user._id}/remove/${idValue}`)
    console.log("Cart updated", updateQty)

};

//function to clear the cart - shopReducer will reset the cart to its initial state
const clearCart = () => {
   //delete endpoint
}

// / const quantityAmount = async () => {
    //        try{
    //         const cartInfo = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`)
    // console.log("Quantity Amount", cartInfo.totalAmount)
    //     // setNumberofProducts(sumCart)
    //     } catch (error) {
    //         console.error("Error getting Cart info", error);
    //     }
        
        
    // };
    
    // useEffect(()=>{
    //     quantityAmount()
    // }, [login])

// const cartCountingProducts = async (sumCart) => {
//     console.log("Cart found - Context")  
//     console.log(sumCart, "Objects in the cart")
//     setNumberofProducts(sumCart)
    
// };

const cartCountingProducts = async () => {
    try {
        const findCart = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`)
        console.log("FIND CART CONTEXT", findCart)
       if(findCart){
        setNumberofProducts(findCart.data[0].totalAmount)
       }

    } catch (error) {
        console.error("Error updating cart quantity:", error);
}

};
cartCountingProducts()


  const value = {
    addToCart,
    removeFromCart,
    updateCart,
    clearCart,
    updateCartQuantity,
    cartCountingProducts,
    numberofProducts
  }     

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


export default CartProvider;