
import img1 from "../../public/Img/img1.webp"
import stu from "../../public/Img/stu.webp"

function About() {
    const aboutText = [
        {
            id: 0,
            text: "Smart Workspace for Teams",
            p: "AcroDesk Pro is designed to provide a comprehensive smart workspace where teams can seamlessly manage projects, track tasks, and collaborate effectively in one unified platform. The interface is intuitive, ensuring that even first-time users can navigate effortlessly. By consolidating tools for planning, communication, and monitoring, AcroDesk Pro eliminates the need for juggling multiple applications, saving time and reducing workflow friction. Whether it’s managing sprints, allocating resources, or tracking deliverables, the platform empowers teams to stay organized and productive from start to finish.",
        },{
            id: 1,
            text: "Seamless Collaboration",
            p: "Collaboration is at the heart of AcroDesk Pro. The platform enables real-time updates, ensuring that all members stay informed about project changes and task progress without delay. Integrated live chat functionality allows professors, managers, and team members to exchange quick messages, share documents, and even collaborate on problem-solving without leaving the workspace. Shared boards provide visual overviews of tasks and project stages, while notifications and alerts keep everyone in sync, preventing miscommunication and delays.",
        },{
            id: 2,
            text: "Customizable Workflow",
            p: "No two teams operate in the same way, which is why AcroDesk Pro offers highly customizable workflows. Users can tailor boards, create automated processes, and assign role-based permissions to match their specific operational needs. Teams can define custom stages, integrate preferred productivity tools, and build processes that suit their pace and style of work. Automation features reduce repetitive tasks, such as status updates and reminders, allowing teams to focus on core activities like planning and execution.",
        },{
            id: 4,
            text: "Secure & Scalable",
            p: "Students can submit doubts anytime — in class or after hours — using a simple form or chat widget. Each submission accepts text, images, and short code snippets so students can explain the problem clearly. Submissions are timestamped and stored immediately for faculty review.",
        },
    ]
    return (
        <>
            <div className="w-[90%] mx-auto py-4">
                <span className="Text_Color text-2xl md:text-4xl font-bold">About Us</span>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
                    <img src={stu} className=" w-[300px] rounded-xl Box_Shedow" />
                    <ul className="w-full p-2">
                        <li className="p-2  text-xl text-justify">AcroDesk Pro is an innovative digital platform designed to assist college professors in solving student doubts efficiently and in real time. It streamlines communication between students and faculty through structured doubt submission, automated routing, and integrated chat or video support.</li>
                        <li className="p-2  text-xl text-justify">
                            Professors can track queries, view past discussions, and manage subject-specific concerns with ease. With its intuitive dashboard and analytics, AcroDesk Pro empowers educators to provide timely academic support while improving the overall learning experience.
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

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                
                        {
                            aboutText.map(({ id, text, p }) => (
                                <div key={id} className=" px-1 bg-[#cccccc34] rounded-xl Box_Shedow">
                                    <div className=" p-2 ">
                                        <i className=" Text_Color font-extrabold text-2xl">{text}</i>
                                        <p className="pt-1 text-md text-justify">{p}</p>
                                    </div>
                                </div>
                            ))
                        }
             
                </div>

            </div>
        </>
    )
}

export default About