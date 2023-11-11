import React from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/notfound.css"


const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost 🙈</h1>
      <p>Here is a helpful link:</p>
      <NavLink to="/home">HOME</NavLink>
    </div>
  );
}

export default NotFound