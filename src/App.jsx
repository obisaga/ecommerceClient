// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Shop from './components/Shop'
import Login from './components/Login'
import Register from './components/Register'

function App() {


  return (
    <>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>

    </>
  )
}

export default App
