import React, { useState, useEffect, useContext } from "react";
import "../styles/loginAndRegister.css";
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showElement, setShowElement] = useState(false);
      
    const {login} = useContext(UserContext);
      
    useEffect(() => {
      let timer = setTimeout(() => {
        setShowElement(false);
      }, 3500);
      return () => {
        clearTimeout(timer);
      };
    }, [showElement]);

    
    const handleSubmit = async (e) => {
      e.preventDefault();
      login(email, password, setLoading, setSuccess, setError);
      
    };
  
  return (
    <div>
      <Navigation />
      {loading && <p>Loading...</p>}
      {success && <p>Login successful!</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginRegisterTitle">Login</p>
          {showElement ? (
            <div class="popup">
              <p id="timer" class="popuptext">
                {error}
              </p>
            </div>
          ) : null}

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
        
  
        </>
      )}
      <Info />
      <Footer />
    </div>
  )
}

export default Login


