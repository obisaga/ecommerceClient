import React from 'react'

const CartPopUp = ({ message, onClose }) => {

    //p displays a message="Product has been added to the shopping cart!" and button runs a function that sets popup window to false (initial state) and closes it

    return (
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>  
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

export default CartPopUp