import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer"
import axios from 'axios';


const Checkout = () => {
    const {pushOrder} = useContext(CartContext)
    const { user } = useContext(UserContext);
    const [products, setProducts] = useState([]); 
    const [amounts, setAmounts] = useState([])


    const findOrder = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/cart/user/${user._id}`);
          console.log(response.data);
          if (response.status === 200){ 
            console.log("Order found", response.data)
            setAmounts(response.data)
            setProducts(response.data.products)
          }
        } catch (err) {
console.log("Error", err)      
  } finally {
            }
      };

    const handleClick = async () => {
        await pushOrder();
     console.log("Confirm Clicked")
    };


    useEffect(() => {
        findOrder();
      }, [user]);

  return (
    <>
    <Navigation />
    <div>Order Summary</div>


    {products.map((product, index) => {
          return (
            <div  key={index}>
            <div className="cart">
            <img src={product.productId.image}></img>
            <p>{product.productId._id} , {product._id}, {product.quantity}, {product.productId.title}</p>
            <p >Color: {product.productId.color}</p>
            <p >{product.productId.price} €</p> 
          
            </div>
             <hr/>
             </div>
          );
        })
      }
      
       <div className="total-price">
          <p>Total: {amounts.totalAmountPrice} </p>
          <p>€</p>
                   
        </div>
        <div className="total-amount">
          <p>Products: {amounts.totalAmount} </p>
          
                   
        </div>
    

    <button className="confirmBtn"  onClick={handleClick}> Confirm </button>
    <Info />
    <Footer />
    </>
  )
}

export default Checkout