import { Routes, Route} from "react-router-dom";
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import ShopFilter from './components/ShopFilter'
import Login from './components/Login'
import Cart from './components/Cart'
import Register from './components/Register'
import SingleProduct from './components/SingleProduct'
import Contact from "./components/Contact";
import AccountSettings from "./components/AccountSettings";
import Checkout from "./components/Checkout";
// import NotFound from "./components/NotFound";
// import PublicRoutes from "./routes/PublicRoutes"
// import PrivateRoutes from "./routes/PrivateRoutes"
import Newsletter from "./components/Newsletter";
import "./App.css";


function App() {
  
  return (
    <>
      <Routes>

     
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:id" element={<SingleProduct />}/>
          <Route path="/shop/:filter" element={<ShopFilter />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          {/* <Route path="/notfound" element={<NotFound />} /> */}
          <Route path="/newsletter" element={<Newsletter />} /> 
          {/* <Route path='*' element={<Navigate to={"/home"} />} /> */}
    
          <Route path="/account" element={<AccountSettings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} /> 
     
      </Routes>
    
    </>
    
  );
}

export default App
