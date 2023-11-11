import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Navigation from '../elements/Navigation';
import Info from '../elements/Info';
import Footer from '../elements/Footer';

const Shop = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/products");
      console.log(response.data);

      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <Navigation />
      {products.map((product, index) => {
        return (
          <>
            <p key={index}>{product.title}</p>
            <img src={product.image} alt={product.title} />
          </>
        );
      })}
      <Info />
      <Footer />
    </>
  );
}

export default Shop