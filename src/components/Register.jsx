import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/loginAndRegister.css"
import Navigation from "../elements/Navigation";
import Info from "../elements/Info";
import Footer from "../elements/Footer";

//MODAL STUFF
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';



const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [modal, setModal] = useState(false)

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
      setModal(!modal);  

      if (getResponse.ok) {
        const data = await getResponse.json();
        console.log(data);
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


  const confirmClose = () => {
    console.log("button clicked")

    setModal(!modal);  
  };

  return (
    <div>
        <Navigation />
      <div>
<>
      <MDBModal tabIndex='-1' open={modal} setOpen={setModal}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Confirmation</MDBModalTitle>
            <MDBBtn className='btn-close' color='none'></MDBBtn>
          </MDBModalHeader>

{!error ? (<>  <MDBModalBody>
            <p>
              Account Registered
            </p>
          </MDBModalBody>
          <MDBModalFooter>
           <Link to="/login"><MDBBtn onClick={confirmClose}>Close</MDBBtn></Link>
          </MDBModalFooter></>) : (<>  <MDBModalBody>
            <p>
              E-mail is already in use
            </p>
          </MDBModalBody>
          <MDBModalFooter>
           <MDBBtn onClick={confirmClose}>Close</MDBBtn>
          </MDBModalFooter></>)}
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
    </>

    
      <p>Already a member?  <Link to="/login">Login here</Link></p><br/>

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
        
          <input type="submit" className="registerButton" value="REGISTER"/>
        </form>
        {error ? <p>{error} </p> : null}
      </div>
      <Info />
      <Footer />
    </div>
  );
};

export default Register;