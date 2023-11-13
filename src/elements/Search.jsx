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
  
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // setError("")
        const response = await axios.get(`http://localhost:3000/api/products/search?query=${input}`);
        console.log("Response data: ", response.data);
        setProducts(response.data);
  
        if (response.data.length === 0) {
          setError("Search unsuccessful. No data found.");
          setProducts([]);
      } else {
          setProducts(response.data);
        }
  
      } catch (error) {
        setError("The request has failed");
        setProducts([]);
      } finally {
        setLoading(false)
      }
    };


  //   const fetchData = async () => {
  //   try {
  //     setLoading(true);
  //     setError("");
  //     const response = await axios.get(
  //       `http://hn.algolia.com/api/v1/search?query=${inputValue}`
  //     );
  //     const data = response.data.hits.filter(
  //       (data) => data.url != null
  //     );
  //   if (data.length === 0) {
  //       setError("Search unsuccessful. No data found.");
  //       setData([]);
  //   } else {
  //       setData(data);
  //     }
  //   } catch (error) {
  //     // setError("The request has failed");
  //     setData([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
    // useEffect(() => {
    //   fetchProducts();
    // }, []);
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      fetchProducts();
    };
    

  return (
    <div>
      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className="paragraphContent">Content loading ...</p>
        </div>
      ) : null}
      {error && <div>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a product"
          value={input}
          onChange={handleChange}
        />
      </form>

 
      {products.map((product, index) => {
        return (
          <>
           <div className="cardContainer">
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
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Search