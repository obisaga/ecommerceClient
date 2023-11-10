import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loginAndRegister.css"


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userRegister = async (credentials) => {
    try {
      const url = "http://localhost:3000/api/auth/register";
      const requestData = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: credentials.firstName,
          lastName: credentials.lastName,
          birth: credentials.birth,
          email: credentials.email,
          password: credentials.password
        }),
      };
      const getResponse = await fetch(url, requestData);
      console.log(getResponse);

      if (getResponse.ok) {
        const data = await getResponse.json();
        console.log(data);

        navigate("/login");
        return data;
      } else {
        const data = await getResponse.json();
        setError("Error");
        return data;
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await userRegister({
      firstName,
      lastName,
      birth,
      email,
      password,
    });
    console.log(response);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="loginForm">
          <p className="loginRegisterTitle">Registration</p>

          <label className="registerLabel">First Name:</label>
          <input
            type="text"
            id="firstName"
            className="register-text-input"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Username"
            required
          />
          <br />
          <label className="registerLabel">Last Name:</label>
          <input
            type="text"
            id="lastName"
            className="register-text-input"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <br />
          <label className="registerLabel">Date of Birth</label>
          <input
            type="date"
            id="birth"
            className="register-text-input"
            name="birth"
            onChange={(e) => setBirth(e.target.value)}
            placeholder="YYYY-MM-DD"
            required
          />
          <br />
          <label className="registerLabel">Email:</label>
          <input
            type="email"
            id="email"
            className="register-text-input"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
          />
          <br />
          <label className="registerLabel">Password:</label>
          <input
            type="password"
            id="password"
            className="register-text-input"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            required
          />
          <br />
        
          <input type="submit" className="registerButton" value="REGISTER" />
        </form>
        {error ? <p>{error} </p> : null}
      </div>
    </div>
  );
};

export default Register;