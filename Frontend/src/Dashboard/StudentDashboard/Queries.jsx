import React from 'react'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"

function Queries() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

  return (
    <>
      <div className="w-[90%] mx-auto my-5 rounded-xl h-auto py-5 Box_Shedow">
        <h1 className='Text_Color text-2xl font-semibold p-5'>Queries</h1>
        <form action="" className='flex-col lg:flex-row flex justify-center  items-center gap-2 p-2'>
          <div className="w-full h-auto">
            <input type="email" {...register("email", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
            {errors.email && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
          </div> 
          <div className="w-full h-auto">
            <input type="email" {...register("email", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
            {errors.email && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
          </div>
           <div className="w-full h-auto">
            <input type="file" {...register("email", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
            {errors.email && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
          </div>
           <button className="w-full bg-sky-800   text-white rounded-xl hover:bg-sky-700 cursor-pointer text-2xl p-2" >Submit Queries</button>
        </form>
      </div>

    </>
  )
}

export default Queries