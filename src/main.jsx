import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/UserContext.jsx'
// import ShopProvider from './context/ShopContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      {/* <ShopProvider> */}
        <App />
      {/* </ShopProvider> */}
    </UserProvider>
  </BrowserRouter>
);
