import { Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Login from './components/Login'
// import Cart from './components/Cart'
import Register from './components/Register'
import Product from './components/Product'
import { ShopProvider } from "./context/ShopContext";
import ShoppingCart from "./components/ShoppingCart";
// import NotFound from "./components/NotFound";
// import PublicRoutes from "./routes/PublicRoutes"
// import PrivateRoutes from "./routes/PrivateRoutes"


function App() {


  return (
    <>
      <ShopProvider>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<ShoppingCart />} />

          <Route path="/products/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </ShopProvider>
    </>
  );
}

export default App
