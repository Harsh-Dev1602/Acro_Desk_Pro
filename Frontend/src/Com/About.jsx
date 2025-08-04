
import img1 from "../../public/Img/img1.webp"
import stu from "../../public/Img/stu.webp"

function About() {
    return (
        <>
            <div className="w-[90%] mx-auto p-2">
                <h1 className="bg-gradient-to-r flex justify-center items-center gap-2 from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent p-2 font-bold text-2xl md:text-4xl">About AcroDesk <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-sm p-1 text-white font-bold'>Pro</span></h1>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                    <img src={stu} className=" w-[300px] rounded-xl Box_Shedow" />
                    <ul className="w-full p-2">
                        <li className="p-2  text-xl text-justify">AcroDesk Pro is an innovative digital platform designed to assist college professors in solving student doubts efficiently and in real time. It streamlines communication between students and faculty through structured doubt submission, automated routing, and integrated chat or video support.</li>
                        <li className="p-2  text-xl text-justify">
                            Professors can track queries, view past discussions, and manage subject-specific concerns with ease. With its intuitive dashboard and analytics, AcroDesk Pro empowers educators to provide timely academic support while improving the overall learning experience.
                        </li>
                        <li className="p-2  text-xl text-justify">
                            Designed with ease of use in mind, AcroDesk Pro is mobile and desktop friendly, secure, and scalable for any college or university setup. It not only enhances learning outcomes for students but also reduces communication overload for professors.
                        </li>

                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-5 p-2">
                    <ul className=" order-2 lg:order-1">
                        <li className="p-2  text-xl text-justify">
                            Whether for technical doubts or conceptual clarity, AcroDesk Pro ensures no student question goes unanswered — making it a smart companion in modern education.
                        </li>
                        <li className="p-2  text-xl text-justify">
                            Professors benefit from a clean dashboard that shows pending queries, priority levels, and analytics on common student problems. This helps in better preparation, improved teaching strategies, and focused revision sessions.
                        </li>
                    </ul>

                    <img src={img1} className="order-1 lg:order-2 w-[400px] rounded-xl Box_Shedow" />
                </div>


            </div>
        </>
    )
}

export default About