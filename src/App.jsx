// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Login from './components/Login'
import BackupLogin from './components/BackupLogin'
import Cart from './components/Cart'
import Register from './components/Register'
import SingleProduct from './components/SingleProduct'

function App() {


  return (
    <>
       <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<BackupLogin />} />
      
          <Route path="/register" element={<Register />} />
        </Routes>

    </>
  )
}

export default App
