import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext';
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import "../styles/account.css"
import { Link } from "react-router-dom";
import Info from "../elements/Info"


const AccountSettings = () => {

    const { user, token, logout } = useContext(UserContext);
    const [isEditing, setEditing] = useState(false);
    const [name, setName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [orders, setOrders] = useState([])
    const [images, setImages] = useState([])

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = async () => {
        // Send data to the database
        try {
            const response = await axios.put(`https://ecommerce-server-hrcv.onrender.com/api/users/${user._id}`, {
                firstName: name,
                lastName: lastName,
            }, {
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                }
            });

            console.log('Data saved:', response.data);
        } catch (error) {
            console.error('Error saving data:', error);
        }

        setEditing(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };


    const findOrder = async () => {
        try {
            setLoading(true)
          const response = await axios.get(`https://ecommerce-server-hrcv.onrender.com/api/orders/user/${user._id}`);
          console.log(response.data);
         
         (console.log)
          if (response.status === 200){ 
            // console.log("Order found", response.data.products.map((product)=>product.productId.image))
            setOrders(response.data)
        //    setImages(response.data.products.map((product)=>product.productId.image))



          } else {
            console.log("Order not found", response.data)
          }
        } catch (err) {
            console.log("Error",error)        
        } finally {
            setLoading(false)
        }
      };

      
          
      useEffect( () => {
        findOrder();
      }, [user]);



          console.log(images)


    return (
        <div>
            <Navigation />
            {loading && <p>Loading...</p>}
            {success && <p>User updated successful!</p>}
            {error && <p>Error: {error}</p>}
            <Link to="/shop">
                <button className='continueBtn'> ← GO TO SHOP </button>
            </Link>
            <div className="titleParent"><h1>Account Settings</h1></div>

            <br />
            {!loading && !error ? (<>{isEditing ? (
                <div className='settings-container'>
                
                    <label>
                        Name: 
                        <input type="text" value={name} onChange={handleNameChange} />
                    </label>
                    <br />
                    <label>
                        Last Name: 
                        <input type="text" value={lastName} onChange={handleLastNameChange} />
                    </label>
                    <br />
                    <label htmlFor="email">Email:
                    <input id="email" type="text" value={user.email} disabled />
                    </label>
                    <br />

                    <button onClick={handleSaveClick} className='editBtn'>SAVE</button>
                </div>
            ) : (
                <div className="settings">
                    <p>Name: {name}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {user.email}</p>
                    <div className="settingsBtns">
                    <button onClick={handleEditClick} className='editBtn'>EDIT</button>
                   <button
                        className="editBtn"
                        type="button"
                        onClick={() => logout()}
                    >
                        Sign Out
                    </button>
                    </div>
                </div>

            )}</>)
                :
                (
                    <>
                        <h3 className='not-available'>
                            User settings not available at the moment. Please come back later!
                        </h3>
                        <Link to="/shop">
                            <button className='continueBtn'> ← SHOP </button>
                        </Link>
                    </>)
            }
           
            <hr />

           

            <div className="titleParent"> <h1>Order History</h1></div>
 {orders.length ? orders.map((order)=>(
    <div className="orders">
 <div className="orderDisplaySummary">
    <p>Order Number: {order._id}</p> 
    <p>Total Price: {order.totalAmountPrice}</p> 
    <p>Number of products: {order.totalAmount}</p>
</div>
    <div className="productsDisplaySummary">
        <div> <h6>Products</h6></div>
   <div className="productImages">
   {order.products.map((product, index) => {
        return (
          <div key={index}>
          <img src={product.productId.image} className="accountImg"></img>
          <p>{product.productId.title}</p>
          </div>
           
        );
      })
    }
    </div>
    </div>
    </div> 
 )) 
              
                
                : (<><p>You don't have orders history</p></>)}

            <Info />
            <Footer />
        </div>
    );
};

export default AccountSettings;


