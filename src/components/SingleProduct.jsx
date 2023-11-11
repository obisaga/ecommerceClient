import React, {useState, useEffect, useContext} from 'react'
import { useParams } from "react-router-dom";
import Navigation from '../elements/Navigation';
import Footer from '../elements/Footer';
import * as ReactBootstrap from "react-bootstrap";
import Card from "react-bootstrap/Card";
import axios from 'axios'
import { UserContext } from '../context/UserContext';



const SingleProduct = (props) => {
  const [product, setProduct] = useState({});
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  const { id } = useParams();

  const productFetch = async () => {
    try {
      setLoading(true);
      const url = `http://localhost:3000/api/products/${id}`;
      const response = await axios.get(url);
      console.log(response.data)

      setProduct(response.data)
    
    } catch (error) {
      console.error;
      // setError("The request to get searched products has failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    productFetch();
  }, [id]);


  const {user} = useContext(UserContext);
console.log(user)
   
    const findCart = async () => {
console.log("hello")
      try {    
        const url = `http://localhost:3000/api/cart/user/${user._id}`;
        const response = await axios.get(url);
        console.log(response)
       if(response.request.status === 200){
        //send data about userId, products (productId and quantity) to be able to update cart
        const addToCart = await axios.put(url);
        console.log(addToCart.data)
       }
       else {
         //send data about userId, products (productId and quantity) to be able to create a cart
        const createCart = await axios.post("http://localhost:3000/api/cart");
        console.log(createCart.data)
       }

      
      } catch (error) {
        console.error;
      } finally {
        setLoading(false);
      }
    };
  
  



  return (
    <div>
//       <Navigation />



{/* //       {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null} */}
      {/* {error && <div>{error}</div>}   */}

      {Object.keys(product).length ? 
      <Card>
        <Card.Img variant="top" src={product.image} />
        <Card.Body className="cardBody">
          <Card.Title className="cardTitle">{product.title}</Card.Title>
          <Card.Text className="about">
            {product.desc}
          </Card.Text>
        </Card.Body>
        <button className="addToCart" onClick={findCart}>ADD TO CART </button>
      </Card> : null}
      

      <Footer />
    </div>
    
  );
};



export default SingleProduct