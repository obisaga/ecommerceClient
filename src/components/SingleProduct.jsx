import React, {useState, useEffect} from 'react'
import Navigation from '../elements/Navigation';
import Footer from '../elements/Footer';
import * as ReactBootstrap from "react-bootstrap";
import Search from '../elements/Search';

const SingleProduct = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError("")
      const response = await axios.get("http://localhost:3000/api/products");
      console.log(response.data);
      setProducts(response.data);

      if (products.length === 0) {
        setError("Search unsuccessful. No data found.");
        setProducts([]);
    } else {
        setProducts(products);
      }

    } catch (error) {
      setError("The request to get searched products has failed");
      setProducts([]);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  return (
    <div>
      <Navigation />
      <Search />
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null}
      {error && <div>{error}</div>}  
      
      {products.map((product, index) => {
        return (
          <>
            <p key={index}>{product.title}</p>
            <img src={product.image} alt={product.title} />
          </>
        );
      })}

      <Footer />
    </div>
  )
}

export default SingleProduct