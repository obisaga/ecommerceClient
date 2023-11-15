import React, {useState, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext';
import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";
import "../styles/account.css"
import { NavLink } from "react-router-dom";


const AccountSettings = () => {
  const { user, logout } = useContext(UserContext);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  // console.log(user);
 

  const updateProfile = async () => {
    try {
      setLoading(true)
      setError("")
      const response = await axios.put(`http://localhost:3000/api/users/${user._id}`, {
        firstName,
        lastName,
      });

      console.log(response.data, "Response from account fetch");

      setSuccess(true)
    } catch (err) {
      setError("Error updating profile")
    } finally {
      setLoading(false)
    }
  };
 

const handleSubmit = async (e) => {
  e.preventDefault()
  await updateProfile();
  console.log(response.data);
  }


  return (
    <>
      <Navigation />
      {loading && <p>Loading...</p>}
      {success && <p>Login successful!</p>}
      {error && <p>Error: {error}</p>}
     

      {!loading && !error ? (
        <form onSubmit={handleSubmit} className="form-widget">
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" value={user} disabled />
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <button
              className="button-submit"
              type="submit"
              disabled={loading}
            >
              {loading ? "Loading ..." : "Update"}
            </button>
          </div>

          <div>
            <button
              className="button-logout"
              type="button"
              onClick={() => logout()}
            >
              Sign Out
            </button>
          </div>
        </form>
      ) : (
        <>
        <h3 className='not-available'>
          User settings not available at the moment. Please come back later!
        </h3>
        <NavLink to="/shop">
          <button> SHOP </button>
        </NavLink>
        </>
      )}

      <Footer />
    </>
  );
};



export default AccountSettings