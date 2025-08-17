import React from 'react'
import axios from "axios";
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form"
import { useAuth } from "../Context/AuthProvider";

function Register() {
    const [authUser, setAuthUser] = useAuth();

    const AllRole = [
        {
            id: 0,
            text: "Select Role",
            value: "",
        },
        {
            id: 1,
            text: "Student",
            value: "Student",
        },
        {
            id: 2,
            text: "Faculty",
            value: "Faculty",
        },
        {
            id: 3,
            text: "H.O.D.",
            value: "HOD",
        },
    ];

    const AllDep = [
        {
            id: 0,
            text: "Select Department",
            value: "",
        },
        {
            id: 1,
            text: "CSE",
            value: "CSE",
        },
        {
            id: 2,
            text: "IT",
            value: "IT",
        },
        {
            id: 3,
            text: "ME",
            value: "ME",
        },
        {
            id: 4,
            text: "CE",
            value: "CE",
        },
    ];

    const { register, handleSubmit, reset, formState: { errors, isSubmitSuccessful } } = useForm();

    React.useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            role: data.role,
            department: data.department,
        };


        await axios.post("/api/user/register", userInfo)
            .then((response) => {
                if (response.data) {
                    toast.success("Register successfully..");
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
                    <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent p-2 font-bold text-2xl md:text-4xl">User Registration</h1>
                    <div className="w-full h-auto">
                        <input type="text" {...register("fullname", { required: true })} className='w-full p-2 outline-none  text-xl  rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a full name' />
                        {errors.fullname && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
                    </div>
                    <div className="w-full h-auto">
                        <input type="email" {...register("email", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a email ' />
                        {errors.email && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
                    </div>
                    <div className="w-full h-auto">
                        <input type="password" {...register("password", { required: true })} className='w-full p-2 outline-none  text-xl rounded-xl shadow-sm shadow-[#cccc]' placeholder='Enter a password ' />
                        {errors.password && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
                    </div>

                    <div className="w-full h-auto">
                        <select {...register("role", { required: true })} className='w-full p-2 outline-none text-xl cursor-pointer text-center rounded-xl shadow-sm shadow-[#cccc]'>
                            {
                                AllRole.map(({ id, value, text }) => (<option key={id} value={value} className=" outline-none cursor-pointer " >{text}</option>))
                            }
                        </select>
                        {errors.role && <span className=" text-red-600 font-semibold text-md">This field is required</span>}
                    </div>

                    <div className="w-full h-auto">
                        <select {...register("department", { required: true })} className='w-full p-2 outline-none  text-xl cursor-pointer text-center rounded-xl shadow-sm shadow-[#cccc]'>
                            {
                                AllDep.map(({ id, text, value }) => (<option key={id} value={value} className=" outline-none cursor-pointer ">{text}</option>))
                            }
                        </select>
                        {errors.department && <span className=" text-red-600 font-semibold text-md">This field is required</span>}

                    </div>
                    <button className="w-full bg-sky-800   text-white rounded-xl hover:bg-sky-700 cursor-pointer text-2xl p-3" >Register</button>
                </form>
            </div>
        </>
    )
}

export default Register