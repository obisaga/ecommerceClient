import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext';
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import "../styles/account.css"
import { NavLink } from "react-router-dom";
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
            const response = await axios.put(`http://localhost:3000/api/users/${user._id}`, {
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
          const response = await axios.get(`http://localhost:3000/api/orders/user/${user._id}`);
          console.log(response.data);
          if (response.status === 200){ 
            console.log("Order found", response.data.products.map((product)=>product.productId.image))
            setImages(response.data.products.map((product)=>product.productId.image))
            setOrders(response.data)
          } else {
            console.log("Order not found", response.data)
          }
        } catch (err) {
            console.log("Error",error)        
        } finally {
            }
      };
          
      useEffect(() => {
        findOrder();
      }, [user]);
      console.log(images)


    return (
        <div>
            <Navigation />
            {loading && <p>Loading...</p>}
            {success && <p>User updated successful!</p>}
            {error && <p>Error: {error}</p>}

            <h1>Account Settings</h1>

            <br />
            {!loading && !error ? (<>{isEditing ? (
                <div>

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
                    <label htmlFor="email">Email</label>
                    <input id="email" type="text" value={user.email} disabled />
                    <br />

                    <button onClick={handleSaveClick}>SAVE</button>
                </div>
            ) : (
                <div>
                    <p>Name: {name}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Email: {user.email}</p>
                    <button onClick={handleEditClick}>EDIT</button>
                    <button
                        className="button-logout"
                        type="button"
                        onClick={() => logout()}
                    >
                        Sign Out
                    </button>
                </div>

            )}</>)
                :
                (
                    <>
                        <h3 className='not-available'>
                            User settings not available at the moment. Please come back later!
                        </h3>
                        <NavLink to="/shop">
                            <button> SHOP </button>
                        </NavLink>
                    </>)
            }
            <NavLink to="/shop">
                <button> SHOP </button>
            </NavLink>
            <hr />

           

                <h1>Order History</h1>
 
                {orders ? (<>
                <p>Order Number: {orders._id}</p> 
                <p>Total Price: {orders.totalAmountPrice}</p> 
                <p>Products: {orders.totalAmount}</p>
                
               {images.map((img,index) => {
                    return (
                      <div key={index}>
                      <img src={img}></img>
                      </div>
                       
                    );
                  })
                }
                </> 
                
                ) 
                
                : (<><p>Orders not available</p></>)}
                



           
            <Info />
            <Footer />
        </div>
    );
};

export default AccountSettings;


