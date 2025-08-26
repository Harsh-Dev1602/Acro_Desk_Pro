import { Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/AuthProvider.jsx";

import Navbar from './Com/Navbar'
import Footer from './Com/Footer'
import Home from './Com/Home'
import Register from './Com/Register'
import LogIn from './Com/LogIn'
import Contect from './Com/Contect'
import About from './Com/About'

import HODDashboard from './Dashboard/HODDashboard/HODDashboard.jsx';
import StudentDashboard from './Dashboard/StudentDashboard/StudentDashboard.jsx';
import FacultyDashboard from './Dashboard/FacultyDashboard/FacultyDashboard.jsx';
import AdminDashboard from './Dashboard/AdminDashboard/AdminDashboard.jsx';

import Dashboard from "./Dashboard/Dashboard.jsx"
import Queries from "./Dashboard/StudentDashboard/Queries.jsx"
import Documents from "./Dashboard/StudentDashboard/Documents.jsx"
import MessageBoard from "./Dashboard/StudentDashboard/MessageBoard.jsx"
function App() {
  const [authUser, setAuthUser] = useAuth();
  
  return (
    <>
      <div className="bg-white text-black">
        <div className="w-[94%] h-auto mx-auto  min-[1700px]:w-[70%] min-[3500px]:w-[20%] ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={authUser ? < Navigate to="/dashboard" /> : <Register />} />
            <Route path="/login" element={authUser ? < Navigate to="/dashboard" /> : <LogIn />} />
            <Route path="/about" element={<About />} />
            <Route path="/contect" element={<Contect />} />

            <Route path='/HODDashboard' element={authUser ? <HODDashboard/> :<Navigate to="/" />}/>
            <Route path='/StudentDashboard' element={authUser ? <StudentDashboard/> :<Navigate to="/" />}/>
            <Route path='/FacultyDashboard' element={authUser ? <FacultyDashboard/> :<Navigate to="/" />}/>
            <Route path='/AdminDashboard' element={authUser ? <AdminDashboard/> :<Navigate to="/" />}/>

            <Route path='/dashboard' element={authUser ? <Dashboard /> : <Navigate to="/" />} />
            <Route path='/dashboard/student/queries' element={authUser ? <Queries /> : <Navigate to="/" />} />
            <Route path='/dashboard/student/documents' element={authUser ? <Documents /> : <Navigate to="/" />} />
            <Route path='/dashboard/student/messageboard' element={authUser ? <MessageBoard /> : <Navigate to="/" />} />

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