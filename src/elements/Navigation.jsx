import React, { useContext, useState, useEffect, useRef } from "react";
import "primeicons/primeicons.css";
import "../styles/navi.css";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import axios from 'axios'
import { useParams } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import "../App.css";

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


const Navigation = (props) => {
  const { user, login, logout } = useContext(UserContext);
  const { cartCountingProducts, numberofProducts } = useContext(CartContext);
  const navigate = useNavigate();
  const aboutSectionRef = useRef(null);


  // console.log(user, "navigation login")
  const [modal, setModal] = useState(false)

  const handleLogout = () => {
    setModal(!modal);
  };

  const confirmLogout = () => {
    setModal(!modal);
    logout()
  };

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("");


  const filterProducts = async (e) => {
    try {
      const buttonValue = e.target.value;
      setFilter(buttonValue)
      // console.log(buttonValue);
      navigate(`/shop/${buttonValue}`);

      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };



  const scrollToAboutSection = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({
        behavior: "smooth",
      //   block: "center",  // Center vertically
      // inline: "center", // Center horizontally
      });
    }
  };


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

            {user ? <div className="userIn"><p>Hi, {user.firstName}!</p><i onClick={handleLogout} className="pi pi-sign-out"></i><NavLink to="/account"><i className="pi pi-cog"></i></NavLink><NavLink to="/cart">
              <i className="pi pi-shopping-cart"></i>
            </NavLink>
            {user ? <p className="cartCount">{numberofProducts}</p> : null}</div>
              : <div className="userOut"><p>Hello, Guest!</p><NavLink to="/login"><i className="pi pi-user"></i></NavLink></div>
            }

            <>
              <MDBModal tabIndex='-1' open={modal} setOpen={setModal}>
                <MDBModalDialog centered>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Confirm Logout</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={(e) => filterProducts(e)}></MDBBtn>
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
              <button onClick={()=>navigate("/shop/rings")}  className="navSecondBtn">RINGS</button>
              <button onClick={()=>navigate("/shop/earrings")}className="navSecondBtn">EARRINGS</button>
              <button onClick={()=>navigate("/shop/bracelets")} className="navSecondBtn">BRACELETS</button>
              <button onClick={()=>navigate("/shop/necklaces")}  className="navSecondBtn">NECKLACES</button>

            </div>
          </div>
         
            
          {/* <Link
          to="aboutSection" 
          spy={true}
          smooth={true}
          duration={500}>ABOUT US</Link> */}

{/* <RouterLink to="/home#aboutSection" className="scrollLink">
        ABOUT US
      </RouterLink> */}

<RouterLink to="/home" className="scrollLink" onClick={scrollToAboutSection} >ABOUT US</RouterLink>

          <NavLink to="/contact">CONTACT</NavLink>
          
          <NavLink to="/newsletter">NEWSLETTER</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
