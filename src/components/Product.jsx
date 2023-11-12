import React, { useEffect, useState } from 'react';
import useShop from '../context/ShopContext';

const Product = ({ productId }) => {

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {addToCart, dispatch} = useShop()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/products/${productId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch product (Status: ${response.status})`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError('Failed to fetch product. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // const addToCart = () => {
  //   if (product) {
  //     dispatch({ type: 'ADD_TO_CART', payload: response.data });
  //   }
  // };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <div>
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
