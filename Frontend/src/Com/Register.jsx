

function Register() {

    const AllRole = ["Select Role", "Student", "Faculty", "H.O.D.", "Admin"];
    const AllDep = ["Select Department", "CSE", "IT", "ME", "CE"]
    return (
        <>
            <div className="w-[90%] py-10 mx-auto flex justify-center items-center">
                <form className='w-full md:w-[450px] p-5 Box_Shedow rounded-xl flex justify-center items-center flex-col gap-5'>
                    <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent p-2 font-bold text-2xl md:text-4xl">User Registration</h1>
                    <div className="w-full h-auto">
                        <input required type="text" className='w-full p-2 outline-none  text-xl  rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a full name' />
                    </div>
                    <div className="w-full h-auto">
                        <input required type="email" className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
                    </div>
                    <div className="w-full h-auto">
                        <input required type="password" className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a password ' />
                    </div>

                    <div className="w-full h-auto">
                        <select required className='w-full p-2 outline-none text-xl cursor-pointer text-center rounded-xl shadow-sm shadow-[#cccc]'>
                            {
                                AllRole.map((text) => (<option key={text} className=" outline-none cursor-pointer ">{text}</option>))
                            }
                        </select>
                    </div>
                    <div className="w-full h-auto">
                        <select required className='w-full p-2 outline-none  text-xl cursor-pointer text-center rounded-xl shadow-sm shadow-[#cccc]'>
                            {
                                AllDep.map((text) => (<option key={text} className=" outline-none cursor-pointer ">{text}</option>))
                            }
                        </select>
                    </div>
                    <button className="w-full bg-sky-800   text-white rounded-xl hover:bg-sky-700 cursor-pointer text-2xl p-3" >Register</button>
                </form>
            </div>
        </>
    )
}

export default Register