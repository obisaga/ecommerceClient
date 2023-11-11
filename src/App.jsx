// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Login from './components/Login'
import Register from './components/Register'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'

function App() {


  return (
    <>
       <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/single" element={<SingleProduct />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

    </>
  )
}

export default App
