import React, { useState, useContext } from 'react'
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
            <div>
                <h1>Order History</h1>
            </div>
            <Info />
            <Footer />
        </div>
    );
};

export default AccountSettings;