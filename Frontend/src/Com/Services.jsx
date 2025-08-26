
function Services() {

    const Services = [
        {
            id: 0,
            text: "Real-time doubt submission:",
            p: "Students can submit doubts anytime — in class or after hours — using a simple form or chat widget. Each submission accepts text, images, and short code snippets so students can explain the problem clearly. Submissions are timestamped and stored immediately for faculty review.",
        },
        {
            id: 1,
            text: " Faculty allocation:",
            p: "Every doubt is automatically routed to the most relevant professor or teaching assistant based on subject, course, topic tags, and availability. Manual reassignment is supported so coordinators can re-route complex queries or escalate them to senior faculty.",
        }, {
            id: 2,
            text: "  Chat support:",
            p: "Professors respond via an integrated live chat interface that supports threaded replies, attachments, inline code formatting, and quick-reference links. Chat allows real-time typing indicators, presence status, and private notes so faculty can collaborate on tough problems without leaving the conversation.",
        }, {
            id: 3,
            text: "Doubt history & tracking:",
            p: "All interactions are archived and searchable by student, subject, keyword, or date. Professors can view a student’s full doubt history, previous answers, and resolution timestamps — enabling consistent follow-up, personalised guidance, and spotting recurring misconceptions.",
        },
        {
            id: 4,
            text: " Analytics Dashboard:",
            p: "A built-in analytics dashboard visualises doubt volume, peak submission times, most frequent topics, unanswered vs resolved rates, and average response time per professor. Filters let administrators compare subjects, courses, and date ranges. Use these insights for targeted interventions, resource planning, and curriculum improvements.",
        },
        {
            id: 5,
            text: "Security & privacy:",
            p: "Student data and chat logs are stored securely with role-based access control and audit trails. Exportable reports and CSV downloads make sharing insights with stakeholders simple.",
        },{
            id: 6,
            text: "Call to action:",
            p: "Enable continuous learning and faster resolution with a platform that connects students to the right faculty — instantly, intelligently, and transparently.",
        },
    ]


    return (
        <>
            <div className="w-[90%] h-auto  mx-auto py-10">
                <i className="Text_Color  font-extrabold text-center text-2xl md:text-4xl  my-2">Services </i>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                
                        {
                            Services.map(({ id, text, p }) => (
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

export default Services