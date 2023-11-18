import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/notfound.css"


const NotFound = () => {
  return (
    <div>
      <h1>Oops! You seem to be lost 🙈</h1>
      <p>Here is a helpful link:</p>
      <Link to="/home">HOME</Link>
    </div>
  );
}

export default NotFound