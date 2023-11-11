import React, {useState, useEffect} from 'react'
import * as ReactBootstrap from "react-bootstrap";

const Search = () => {

    const [products, setProducts] = useState([]);
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");
  
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError("")
        const response = await axios.get(`http://localhost:3000/api/products/search?=${input}`);
        console.log(response.data);
        setProducts(response.data);
  
        if (products.length === 0) {
          setError("Search unsuccessful. No data found.");
          setProducts([]);
      } else {
          setProducts(products);
        }
  
      } catch (error) {
        setError("The request has failed");
        setProducts([]);
      } finally {
        setLoading(false)
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
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
            <p key={index}>{product.title}</p>
            <img src={product.image} alt={product.title} />
          </>
        );
      })}
    </div>
  );
}

export default Search