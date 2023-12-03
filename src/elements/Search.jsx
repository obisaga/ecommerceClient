import React, {useState, useEffect} from 'react'
import axios from 'axios';
import * as ReactBootstrap from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/shop.css"




const Search = () => {

    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
  
    const fetchProducts = async (input) => {
      try {
        setLoading(true)
        setError("")
        const response = await axios.get(`https://ecommerce-server-hrcv.onrender.com/api/products/search?categories=${input}`);
        console.log("Response data: ", response.data);
        setProducts(response.data);
  
        if (response.status === 204) {
          setError("Search unsuccessful. No data found.");
          // setProducts([]);
      } else {
          setProducts(response.data);
        }
  
      } catch (error) {
        console.log(error)
        // setProducts([]);
      } finally {
        setLoading(false)
      }
    };
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await fetchProducts(input);
    };
    

  return (
    <div>
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className="paragraphContent">Content loading ...</p>
        </div>
      ) : null}

      {/* {error && <div>{error}</div>} */}
      <div className="searchParent">
      <form onSubmit={handleSubmit} className="searchForm">
        <input
          type="text"
          placeholder="Search for a product"
          value={input}
          onChange={handleChange}
          className='inputSearch'
        />
      </form>
      </div>
      <div className="cardContainer">
{products.length ?   (
      products.map((product, index) => {
        return (
          
            <>
            <Card className="card" key={index}>
              <Link
                className="link"
                key={index}
                to={`/products/${product._id}`}
              >
                <Card.Body>
                  <Card.Title className="cardTitle">
                    <p>{product.title}</p>
                  </Card.Title>
                  <Card.Img
                    variant="bottom"
                    className="cardImg"
                    src={product.image}
                  />
                </Card.Body>
              </Link>
            </Card>
            </>
            
          
        );
      })) : (<div className="errorParent"><p>{error}</p></div>)}</div>
    </div>
  );
}

export default Search