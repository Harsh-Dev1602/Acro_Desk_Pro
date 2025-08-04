import Logo1 from "../../public/Img/acropolisLogo1.png"
import { BsYoutube } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  const Icon = [
    {
      id: 0,
      icon: <FaSquareFacebook />,
    },
    {
      id: 1,
      icon: <FaSquareInstagram />,
    },
    {
      id: 2,
      icon: <FaGithub />,
    },
    {
      id: 3,
      icon: <BsYoutube />,
    },
  ]


  return (
    <>
      <div className="w-[90%] rounded-t-xl mx-auto p-5 py-10 bg-black">

        <div className=" flex flex-col p-5 gap-10 lg:flex-row justify-between items-center ">
          <img src={Logo1} className=' p-5 rounded-xl bg-white Box_Shedow' />

          <ul className=" flex  justify-center items-center gap-5">
            {
              Icon.map(({ id, icon }) => (
                <li key={id} className="text-black bg-white cursor-pointer duration-200 hover:bg-[#fff4f4c1] rounded-xl p-2 text-2xl Box_Shedow">{icon}</li>
              ))
            }
          </ul>
        </div>
        <h1 className=" text-white text-center text-xl">© 2025 AcroDesk Pro. All Rights Reserved.</h1>



      </div>
    </>
  )
}

export default Footer