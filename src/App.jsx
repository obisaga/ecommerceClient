import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Login from './components/Login'
// import BackupLogin from './components/BackupLogin'
import Cart from './components/Cart'
import Register from './components/Register'
import SingleProduct from './components/SingleProduct'
import Contact from "./components/Contact";

// import NotFound from "./components/NotFound";
// import PublicRoutes from "./routes/PublicRoutes"
// import PrivateRoutes from "./routes/PrivateRoutes"


function App() {
 

  return (
    <>
      <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />}/>
          <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} /> 

      </Routes>

      </>
    
  );
}

export default App
