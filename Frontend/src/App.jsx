import Navbar from './Com/Navbar'
import Footer from './Com/Footer'
import Home from './Com/Home'
import Register from './Com/Register'
import LogIn from './Com/LogIn'
import { Route, Routes } from 'react-router-dom'
import Contect from './Com/Contect'
import About from './Com/About'

function App() {
  return (
    <>
    <div className="w-[94%] h-auto mx-auto  min-[1700px]:w-[70%] min-[3500px]:w-[20%] bg-white text-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contect" element={<Contect/>} />
      </Routes>
      <Footer />
    </div>
    </>
  )
}

export default App