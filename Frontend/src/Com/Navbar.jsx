import { useState } from 'react'
import Logo from "../../public/Img/acropolisLogo.png"
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import 'animate.css';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from "../Context/AuthProvider.jsx";
import { IoIosLogOut } from "react-icons/io";


function Navbar() {
    const [authUser, setAuthUser] = useAuth();
    const [menuOpen, setmenuOpen] = useState(false);
    const textNav = [
        { id: 0, text: "Home", link: "/" },
        { id: 1, text: "About Us", link: "/about" },
        { id: 2, text: "Contect Us", link: "/contect" },
        { id: 3, text: "Register", link: "/register" },
        { id: 4, text: "Log In", link: "/login" },
    ]

    const roleNavMap = {
        Student: [
            { id: 1, text: "Home", link: "/dashboard" },
            { id: 2, text: "Queries", link: "/dashboard/student/queries" },
            { id: 3, text: "Documents", link: "/dashboard/student/documents" },
            { id: 4, text: "Message Board", link: "/dashboard/student/messageboard" },
        ],
        Faculty: [
            { id: 1, text: "Home", link: "/dashboard" },
            { id: 2, text: "View Queries", link: "/dashboard/faculty/viewqueries" },
            { id: 3, text: "Upload", link: "/dashboard/faculty/upload" },
            { id: 4, text: "Message Board", link: "/dashboard/faculty/messageboard" },
        ],
        HOD: [
            { id: 1, text: "Home", link: "/dashboard" },
            { id: 2, text: "View Queries", link: "/dashboard/hod/viewqueries" },
            { id: 3, text: "View Documents", link: "/dashboard/hod/viewdocuments" },
            { id: 4, text: "Message Board", link: "/dashboard/hod/messageboard" },
        ],
        "@dmin":[
            {id:1, text:"Home", link:"/dashboard"},
            {id:2, text:"HOD Aprove",link:"/dashboard/hodlist"},
        ]
    };

    const getNavItemsByRole = (role) => {
        const roleItems = roleNavMap[role] || [];
        return roleItems;
    };
    const navText = authUser?.user?.role ? getNavItemsByRole(authUser.user.role) : textNav;

    const handleLogout = async (res) => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if (!confirmLogout) return;
        try {
            const res = await axios.post("/api/user/logout");
            sessionStorage.removeItem("AcroDesk Pro");
            toast.success("Log out successfully..");
            window.location.reload();
        }
        catch (error) {
            console.log("Error in Logout", error);
            toast.error("Error in logging out");
        }
    };


    return (
        <>
            <div className="w-[90%] h-auto mx-auto rounded-b-xl p-2 Box_Shedow flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <img src={Logo} className='Box_Shedow rounded-full w-[50px] md:w-[80px] ' />
                    <h1 className='Text_Color  p-1 text-2xl md:text-4xl font-bold '>AcroDesk </h1>
                    <span className='BG_Color rounded-md text-sm p-1 text-white font-bold'>Pro</span>
                </div>
                <ul className=' gap-5 justify-center items-center hidden lg:flex'>
                    {
                        navText.map(({ id, link, text }) => (
                            <Link key={id} to={link} >
                                <li className=' text-xl font-semibold  cursor-pointer text-black rounded-md Box_Shedow hover:bg-[#cccccc3e] p-1'>{text}</li>
                            </Link>
                        ))
                    }
                    <div onClick={handleLogout} className={`BG_Color  rounded-md p-1 font-bold flex justify-center items-center gap-2  cursor-pointer text-white text-xl  ${authUser?.user?.role ? "block" : "hidden"}`}>
                        <IoIosLogOut /> Log Out
                    </div>

                </ul>
                <div onClick={() => setmenuOpen(!menuOpen)} className="lg:hidden text-black flex text-3xl cursor-pointer  rounded-xl">

                    {menuOpen ? <><RxCross2 />
                        <div className="fixed top-0 right-0 w-[30%] h-screen bg-transparent"></div></> : <MdMenu />}
                </div>
            </div>
            {menuOpen && (
                <>
                    <div
                        className=" w-[70%]  h-screen lg:hidden fixed top-0 left-0 z-50 rounded-md py-5 text-white flex  justify-center items-center flex-col bg-white Box_Shedow animate__animated animate__fadeInLeft
          "
                    > <ul className='flex justify-center items-center flex-col gap-2'>
                            {
                                navText.map(({ id, link, text }) => (
                                    <Link onClick={() => setmenuOpen(!menuOpen)} to={link} key={id}>
                                        <li className=' text-xl font-semibold  cursor-pointer text-black rounded-md Box_Shedow hover:bg-[#cccccc3e] text-center p-1'>{text}</li>
                                    </Link>
                                ))
                            }
                            <div onClick={handleLogout} className={`BG_Color  rounded-md p-1 font-bold flex justify-center items-center gap-2  cursor-pointer text-white text-xl  ${authUser?.user?.role ? "block" : "hidden"}`}>
                                <IoIosLogOut />  Log Out
                            </div>
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar