import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(UserContext);
  const [cart, setCart] = useState({ userId: null, products: [] });

  const url = "http://localhost:3000";

  const addItemToCart = async (productId, quantity) => {
    if (!user || !token) {
      navigate('/login');
      return;
    }

    try {
      const response = await axios.put(`${url}/api/cart`,
        {
          userId: user._id,
          products: [
            { 
                productId, 
                quantity 
            }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCart(response.data);
    } catch (error) {
      console.error('Error adding item to cart:', error.message);
    }
  };

  const removeItemFromCart = async (productId) => {
    if (!user || !token) {
      navigate('/login');
      return;
    }

    try {
      const response = await axios.delete(`${url}/api/cart/${user._id}/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(response.data);
    } catch (error) {
      console.error('Error removing item from cart:', error.message);
    }
  };

  const clearCart = async () => {
    if (!user || !token) {
      navigate('/login');
      return;
    }

    try {
      await axios.delete(`${url}/api/cart/${user._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart({ userId: null, products: [] });
    } catch (error) {
      console.error('Error clearing cart:', error.message);
    }
  };

  useEffect(() => {
    const fetchCart = async () => {
      if (user && token) {
        try {
          const response = await axios.get(`${url}/api/cart/user/${user._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setCart(response.data);
        } catch (error) {
          console.error('Error fetching cart:', error.message);
        }
      }
    };

    fetchCart();
  }, [user, token]);

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, clearCart }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
