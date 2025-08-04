import React from 'react'

function Contect() {
    return (
        <>
            <div className="w-[90%] py-10 mx-auto flex justify-center items-center">
                <form className='w-full md:w-[450px] p-5 Box_Shedow rounded-xl flex justify-center items-center flex-col gap-5'>
                    <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent p-2 font-bold text-2xl md:text-4xl">Contect Us</h1>
                    <div className="w-full h-auto">
                        <input required type="text" className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a full name' />
                    </div>
                    <div className="w-full h-auto">
                        <input required type="email" className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
                    </div>
                    <div className="w-full h-auto">
                        <textarea required  className='min-w-full max-w-full p-2 min-h-[150px] outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a messege'></textarea>
                    </div>

                    <button className="w-full bg-sky-800 cursor-pointer hover:bg-sky-700   text-white rounded-xl text-2xl p-3" >Send messege</button>
                </form>
            </div>
        </>
    )
}

export default Contect