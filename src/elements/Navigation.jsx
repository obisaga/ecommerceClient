import React, {useContext, useState, useEffect} from "react";
import "primeicons/primeicons.css";
import "../styles/navi.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import axios from 'axios'
import { useParams } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
// import LogoutModal from "./LogoutModal";

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


const Navigation = () => {
const {user, logout} = useContext(UserContext);
const {cartCountingProducts} = useContext(UserContext);

console.log(user, "navigation login")
console.log(cartCountingProducts, "IS THIS VISIBLE")
const [modal, setModal] = useState(false)


const handleLogout =  () => {
  setModal(!modal);  
 
};
const confirmLogout = () => {
  setModal(!modal);  
  logout()
};

const [product, setProduct] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const { categories } = useParams();

console.log("Current category:", categories);

const filterProducts = async () => {
  try {
    setLoading(true);
    setError("");

    console.log("Before API call");

    const response = await axios.get(`http://localhost:3000/api/products/filter/${categories}`);
    console.log(response.data);

    const filteredProducts = response.data.filter(product => product.categories.includes(categories));
    console.log(filteredProducts);

    // setProduct(filteredProducts);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    setError("Failed to fetch products");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  filterProducts();
}, [categories]);


  return (
    <>
   
      <div className="topNav">
        <span className="topnav-elements">
          <span className="social-media-icons">
            <NavLink to="https://www.instagram.com/">
              <i className="pi pi-instagram"></i>
            </NavLink>
            <NavLink to="https://www.facebook.com/">
              <i className="pi pi-facebook"></i>
            </NavLink>
            <NavLink to="/shop">
              <i className="pi pi-search"></i>
            </NavLink>
          </span>
          <span className="logo">
            <NavLink to="/home" style={{ textDecoration: "none", color: "black" }}>The Jewellery Shop</NavLink>
          </span>
          <span className="user-cart-icons">


            {user ? <><i onClick={handleLogout} className="pi pi-sign-out"></i><NavLink to="/account"><i className="pi pi-cog"></i></NavLink></> 
              : <NavLink to="/login"><i className="pi pi-user"></i></NavLink>
            }
       
            <>

    <MDBModal tabIndex='-1' open={modal} setOpen={setModal}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Confirm Logout</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={handleLogout}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody>
            <p>
              Are you sure you want to Logout?
            </p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={handleLogout}>
              Nevermind
            </MDBBtn>
            <NavLink to="/home"><MDBBtn onClick={confirmLogout}>Yes</MDBBtn></NavLink>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  </>

            
          
            <NavLink to="/cart">
              <i className="pi pi-shopping-cart"></i>
            </NavLink>
          </span>
        </span>
      </div>
      <hr size="1" />

      {loading ? (
        <div>
          <ReactBootstrap.Spinner animation="border" variant="light" />
          <p className='paragraphContent'>Content loading ...</p>
        </div>
      ) : null} 
      {error && <div>{error}</div>}  

      

      <div className="bottomNav">
        <div className="links">
          <NavLink to="/home">HOME</NavLink>
          <div className="dropdown">
            <NavLink to="/shop" className="dropbtn">SHOP</NavLink>
            <div className="dropdown-content">
              <NavLink to="/shop" onClick={filterProducts}>RINGS</NavLink>
              <NavLink to="/shop">NECKLACES</NavLink>
              <NavLink to="/shop">BRACELETS</NavLink>
            </div>
          </div>
          <NavLink to="">ABOUT US</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
          <NavLink to="">NEWSLETTER</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
