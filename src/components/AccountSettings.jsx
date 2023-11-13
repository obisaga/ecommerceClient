import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../context/UserContext';

import Navigation from "../elements/Navigation";
import Footer from "../elements/Footer";


const AccountSettings = () => {


    const { user } = useContext(UserContext);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

console.log(user)



  return (
    
    <>
    <Navigation />
    {loading && <p>Loading...</p>}
    {success && <p>Login successful!</p>}
    {error && <p>Error: {error}</p>}
    {!loading && !error && (
      <>
      <h1>Account Settings</h1>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.birth}</p>
      <p>{user.email}</p>
      <hr/>
      <div>
<h1>Orders History</h1>
<p>Fetch orders here</p>
      </div>

      </>
    )}
     <Footer />
  </>
   
  )
}

export default AccountSettings