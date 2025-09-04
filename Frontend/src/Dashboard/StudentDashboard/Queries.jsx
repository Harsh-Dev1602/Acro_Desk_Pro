import React from 'react'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import img1 from "../../../public/Img/img1.webp"

function Queries() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast.success("Successfully submit you Query..")
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);


  return (
    <>
      <div className="w-[90%] mx-auto my-5  h-auto  ">
        <h1 className='Text_Color text-4xl font-bold p-5'>Submit your queries below.</h1>
        <div className="flex gap-5 justify-center items-center flex-col md:flex-row">
          <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[450px] flex-col flex justify-center  items-center gap-2 p-2 Box_Shedow rounded-xl py-5'>
            <div className="w-full h-auto">
              <input type="text" {...register("subject", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a subject name ' />
              {errors.subject && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
            </div>
            <div className="w-full h-auto">
              <input type="text" {...register("query", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a query ' />
              {errors.query && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
            </div>

            <button className="w-full  text-white rounded-xl BG_Color cursor-pointer text-2xl p-2.5" >Ask Query</button>
          </form>

          <img src={img1} className=" w-[500px] rounded-xl Box_Shedow" />

        </div>
      </div>

    </>
  )
}

export default Queries