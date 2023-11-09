// import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import Shop from './components/Shop'

function App() {


  return (
    <>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

    </>
  )
}

export default App
