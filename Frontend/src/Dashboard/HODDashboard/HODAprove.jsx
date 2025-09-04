import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../Com/Loader";

export default function HODAprove() {
    const [hods, setHods] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchHods = async () => {
            try {
                const res = await axios.get("/api/user/hodlist");
                setHods(res.data);
            } catch (error) {
                console.error("Error fetching HOD list:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchHods();
    }, []);


    if (loading) {
        return <> <Loader/> </>;
    }
    return (
        <>
            <div className="w-[90%] mx-auto p-6">
                <p className="text-4xl Text_Color font-bold ">List of HODs</p>
                {hods.length === 0 ? (
                    <p className="text-center Text_Color font-bold ">No HODs found</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 py-2">
                        {hods.map((hod) => (
                            <div
                                key={hod._id}
                                className="bg-[#cccccc17] Box_Shedow rounded-xl p-4"
                            >
                                <div className="">
                                    <h2 className="text-2xl font-bold">{hod.fullname}</h2>
                                    <p className="text-gray-800 font-semibold">Email: {hod.email}</p>
                                    <p className="text-gray-800 font-semibold">Department: {hod.department}</p>
                                </div>
                                 <div className="flex justify-end items-center  p-1">
                                    {/* <button className="Text_Color font-bold cursor-pointer Box_Shedow p-2 rounded-xl"> Aprove</button> */}
                                     <button className="bg-red-500 p-2  font-bold cursor-pointer text-white rounded-xl">Delete</button>
                                 </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}
