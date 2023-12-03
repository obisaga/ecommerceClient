import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginAndRegister.css";
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showElement, setShowElement] = useState(false);
    const navigate = useNavigate();
  
    const userLogin = async (credentials) => {
      try {
        const url = "https://ecommerce-server-hrcv.onrender.com/api/auth/login";
        const requestData = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        };
        const getResponse = await fetch(url, requestData);
        console.log(getResponse);
  
        if (getResponse.ok) {
          const data = await getResponse.json();
          console.log(data);
  
          const userToken = data.token;
  
          sessionStorage.setItem("token", JSON.stringify(userToken));
  
          if(userToken){
            navigate("/home")
          }
          return data;
        } else {
          const data = await getResponse.json();
          setError("Invalid e-mail or password, please try again!");
          setShowElement(true);
  
          return data;
        }
      } catch (err) {
        console.error(err);
      }
    };
    console.log(error);
  
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
      const response = await userLogin({
        email,
        password,
      });
      console.log(response);
    };
  
  return (
    <div>
      <Navigation />
      <div>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginRegisterTitle">Login</p>
          {showElement ? (
            <div class="popup">
              <p id="timer" class="popuptext">
                {" "}
                {error}{" "}
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
      </div>
      <Info />
      <Footer />
    </div>
  )
}

export default Login