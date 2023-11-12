import React, { createContext, useContext, useEffect, useReducer } from 'react';
import shopReducer, { initialState } from "./shopReducer";
import axios from 'axios';

// Create the ShopContext
const ShopContext = createContext(initialState);


// Create the ShopProvider component
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

//function to add a product to the cart
const addToCart = (state, product) => {
    const existingProductIndex = state.cart.findIndex((currentProduct) => currentProduct._id === product._id);
  
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update quantity
      const updatedCart = state.cart.map((product, index) =>
        index === existingProductIndex ? { ...product, quantity: product.quantity + 1 } : product
      );
      return calculateTotal(updatedCart);
    } else {
      // Product is not in the cart, add the product
      const updatedCart = [...state.cart, { ...product, quantity: 1 }];
      return calculateTotal(updatedCart);
    }
  };

//function to remove a product from the cart
const removeFromCart = (productId) => {
  const updatedCart = state.cart.filter((currentProduct) => currentProduct._id !== productId);
  return calculateTotal(updatedCart);
};

//function to update the quantity of a product in the cart
const updateQuantity = (state, { productId, quantity }) => {
  const updatedCart = state.cart.map((currentProduct) =>
  currentProduct._id === productId ? { ...currentProduct, quantity } : currentProduct
  );
  return calculateTotal(updatedCart);
};

//function to clear the cart - shopReducer will reset the cart to its initial state
const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
}

// Helper function to calculate the total price of items in the cart
//acc is accumulator and it starts from 0 so for each product in the cart adds the product price and multiplies it by quantity
const calculateTotal = (cart) => {
  const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  return { ...state, cart, total };
};

//     let total = 0;
//     products.forEach((product) => (total += product.price));

//     dispatch({
//       type: "UPDATE_PRICE",
//       payload: {
//         total
//       }
//     });


  // Fetch products from the server and set them in the context
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        dispatch({ type: 'SET_PRODUCTS_START' });

        const response = await axios.get('http://localhost:3000/api/products');

        dispatch({ type: 'SET_PRODUCTS', payload: response.data });
        console.log(dispatch)

      } catch (error) {
        console.error('Error fetching products:', error);
        dispatch({ type: 'SET_PRODUCTS_ERROR', payload: error.message });
      }
    };

    fetchProducts();
  }, []);

  const value = {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    calculateTotal,
    dispatch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Create a custom hook to use the ShopContext
const useShop = () => {
  const context = useContext(ShopContext);

  if (!context || context === undefined) {
    throw new Error('useShop must be used within a ShopProvider');
  }

  return context;
};

export default useShop;
