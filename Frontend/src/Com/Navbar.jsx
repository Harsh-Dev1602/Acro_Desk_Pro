import { useState } from 'react'
import Logo from "../../public/Img/acropolisLogo.png"
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import 'animate.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setmenuOpen] = useState(false);
    const text = [
        {
            id: 0,
            text: "Home",
            link: "/",
        }, {
            id: 1,
            text: "About Us",
            link: "/about",
        }, {
            id: 2,
            text: "Contect Us",
            link: "/contect",
        }, {
            id: 3,
            text: "Register",
            link: "/register",
        },
        {
            id: 4,
            text: "Log In",
            link: "/login",
        },
    ]

    return (
        <>
            <div className="w-[90%] h-auto mx-auto rounded-b-xl p-2 Box_Shedow flex justify-between items-center">
                <div className="flex gap-2 justify-center items-center">
                    <img src={Logo} className='Box_Shedow rounded-full w-[50px] md:w-[80px] ' />
                    <h1 className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent  p-1 rounded-xl text-2xl md:text-4xl font-bold '>AcroDesk </h1>
                    <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-sm p-1 text-white font-bold'>Pro</span>
                </div>
                <ul className=' gap-5 hidden lg:flex'>
                    {
                        text.map(({id,link,text}) => (
                            <Link  key={id} to={link} >
                                <li className=' text-xl font-semibold  cursor-pointer text-black rounded-md Box_Shedow hover:bg-[#cccccc3e] p-1'>{text}</li>
                            </Link>
                        ))
                    }
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
                                text.map(({id,link,text}) => (
                                    <Link onClick={() => setmenuOpen(!menuOpen)}  to={link} key={id}>
                                        <li className=' text-xl font-semibold  cursor-pointer text-black rounded-md Box_Shedow hover:bg-[#cccccc3e] text-center p-1'>{text}</li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar