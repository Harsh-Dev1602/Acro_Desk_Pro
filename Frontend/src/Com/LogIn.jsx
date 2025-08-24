import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from "../Context/AuthProvider.jsx";

function LogIn() {
  
  const [authUser, setAuthUser] = useAuth();
     const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful }, } = useForm()
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    axios.post("/api/user/login", userInfo)
      .then((response) => {
        if (response.data) {
          toast.success("Login successfully");
        }
        sessionStorage.setItem("AcroDesk Pro", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error: " + error.response.data.error);
        }
      });
  };

    return (
        <>
            <div className="w-[90%] py-10 mx-auto flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-[450px] p-5 Box_Shedow rounded-xl flex justify-center items-center flex-col gap-5'>
                    <h1 className="Text_Color p-2 font-bold text-2xl md:text-4xl">User Log In</h1>

                    <div className="w-full h-auto">
                        <input  {...register("email", { required: true })} type="email" className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
                        {errors.email && <span className=' text-red-600 font-semibold text-md'>This field is required</span>}
                    </div>
                    <div className="w-full h-auto">
                        <input  {...register("password", { required: true })} type="password" className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a password' />
                        {errors.password && <span className=' text-red-600 font-semibold text-md'>This field is required</span>}
                    </div>

                    <button className="w-full bg-sky-800 cursor-pointer hover:bg-sky-700   text-white rounded-xl text-2xl p-3" >Log In</button>
                </form>
            </div>
        </>
    )
}

export default LogIn;