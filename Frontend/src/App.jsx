import Navbar from './Com/Navbar'
import Footer from './Com/Footer'
import Home from './Com/Home'
import Register from './Com/Register'
import LogIn from './Com/LogIn'
import { Route, Routes, Navigate } from 'react-router-dom'
import Contect from './Com/Contect'
import About from './Com/About'
import { Toaster } from 'react-hot-toast';
import Dashboard from "./Dashboard/Dashboard.jsx"
import { useAuth } from "./Context/AuthProvider.jsx";

function App() {
  const [authUser, setAuthUser] = useAuth();

  
  return (
    <>
      <div className="bg-white text-black">
        <div className="w-[94%] h-auto mx-auto  min-[1700px]:w-[70%] min-[3500px]:w-[20%] ">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={authUser ? < Navigate to="/dashboard" /> : <Register />} />
            <Route path="/login" element={authUser ? < Navigate to="/dashboard" /> : <LogIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contect" element={<Contect />} />
            <Route path='/dashboard' element={ authUser? <Dashboard/> : <Navigate to="/"/>} />
          </Routes>
          <Footer />
        </div>
      </div>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: 'linear-gradient(to right, #6366f1, #8b5cf6, #ec4899)',
            color: 'white',
            border: 'none',
            fontSize: '20px'
          },
        }}
      />

    </>
  )
}

export default App