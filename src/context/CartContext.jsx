import React, { createContext,  useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from "./UserContext"


// Create the ShopContext
export const CartContext = createContext();



// Create the ShopProvider component
const CartProvider = ({ children }) => {
    const {fetchUserData, user } = useContext(UserContext);
    const [numberofProducts, setNumberofProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0); 
    const [products, setProducts] = useState([]); 
    const [orderCart, setOrderCart] = useState([]); 


    const cartCountingProducts = async () => {
        try {
            const findCart = await axios.get(`https://ecommerce-server-hrcv.onrender.com/api/cart/user/${user._id}`)
           
           if(findCart){
            setNumberofProducts(findCart.data.totalAmount)
            setTotalPrice(findCart.data.totalAmountPrice)
            setProducts(findCart.data.products)
           }
    
        } catch (error) {
            console.error("Error updating cart quantity:", error);
    }
    
    };

    //function to create a cart and add a product
    const addToCart = async (newCartData) => {
        console.log("getting into addToCart function", newCartData)
        await axios.post("https://ecommerce-server-hrcv.onrender.com/api/cart", newCartData);
        await cartCountingProducts()

    };


    //function to update a cart
    const updateCartQuantity = async (productId, quantity) => {
        try {

        let updatedProducts;
        const existingProduct = products.find(p => p.productId._id === productId);

        if(existingProduct){
            updatedProducts = existingProduct.quantity + quantity;
        } else {
            updatedProducts = parseInt(quantity, 10);
        }
        
        //Update cart
        await axios.put(`https://ecommerce-server-hrcv.onrender.com/api/cart/user/${user._id}/${productId}`, {newQuantity : updatedProducts});
        //Refresh price and quantity
        await cartCountingProducts()
        } catch (error) {
            console.error("Error updating cart quantity:", error);
        }
    };


const removeFromCart = async (idValue) => {
    console.log(idValue, "Cart found - Context")  
    const updateQty = await axios.put(`https://ecommerce-server-hrcv.onrender.com/api/cart/user/${user._id}/remove/${idValue}`)
    await cartCountingProducts()
    console.log("Cart updated", updateQty)

};


/// push cart to Orders

const pushOrder = async () => {
    // fetch data about the whole cart, cart = response from that fetch
    const userId = user._id
    console.log("PUSH ORDER", userId)
    // const cart = products
    // console.log("PUSH ORDER",cart)
    // const payload = { userId, cart };
    // console.log("PUSH ORDER",payload)
    try {
        const response = await axios.post(`https://ecommerce-server-hrcv.onrender.com/api/users/reserve/${user._id}`, {
            headers: { 'Content-Type': 'application/json' }
        });
    console.log("order cart context", response)
    await fetchUserData();

    } catch (e) {
        console.log(e.response.data)
        setError(e.response.data);
        
    } finally {
        const resetCart = await axios.delete(`https://ecommerce-server-hrcv.onrender.com/api/cart/user/${user._id}`, {
            headers: { 'Content-Type': 'application/json' }
        })
        console.log("Cart set to null", resetCart)
        setNumberofProducts(0)
    }
};


useEffect(()=>{
    cartCountingProducts()
}, [user])


  const value = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
    cartCountingProducts,
    numberofProducts,
    totalPrice,
    pushOrder
  }     

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


export default CartProvider;