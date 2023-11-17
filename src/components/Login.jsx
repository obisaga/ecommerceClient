import React, { useState, useEffect, useContext } from "react";
import "../styles/loginAndRegister.css";
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer";
import { useNavigate, Link } from "react-router-dom";
import { UserContext } from '../context/UserContext';



const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showElement, setShowElement] = useState(false);
      
    const {user, login} = useContext(UserContext);
      
    // useEffect(() => {
    //   let timer = setTimeout(() => {
    //     setShowElement(false);
    //   }, 1000);
    //   return () => {
    //     clearTimeout(timer);
    //   };
    // }, [showElement]);

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      login(email, password, setLoading, setSuccess, setError);
      
    };
  
  return (
    <div>
      <Navigation />
      {loading && <p>Loading...</p>}
      {/* {success } */}
      {/* {error && <p>Error: {error}</p>} */}

    
      {!loading && !error && (
         <div className="form-container">
        <p className ="pLoginRegister">Not a member yet?  <Link to="/register">Register here</Link></p><br/>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginRegisterTitle">Login</p>
          {/* {showElement ? (
            <div class="popup">
              <p id="timer" class="popuptext">
              Hi, {user.firstName}!
              </p>
            </div>
          ) : null} */}

          <label className="loginLabel">Email:</label>
          <input
            type="text"
            id="email"
            className="login-text-input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail"
            required
          />
          <label className="loginLabel">Password:</label>
          <input
            type="password"
            id="password"
            className="login-text-input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input type="submit" className="loginButton" value="LOGIN" />
        </form>
  
        </div>
      )}

      {error ? (<><p> {error.message} </p></>): null}
      <Info />
      <Footer />
    </div>
  )
}

export default Login


