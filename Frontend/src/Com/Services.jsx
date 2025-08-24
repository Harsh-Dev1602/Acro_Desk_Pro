import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Services() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const Services = [
        {
            id: 0,
            text: "Real-time doubt submission:",
            p: " Students can submit doubts anytime.",
        },
        {
            id: 1,
            text: " Faculty allocation:",
            p: "Queries are routed to the relevant professor.",
        }, {
            id: 2,
            text: "  Chat support:",
            p: "Professors can resolve doubts via live chat.",
        }, {
            id: 3,
            text: "Doubt history & tracking:",
            p: "Professors can view previously answered questions.",
        },
        {
            id: 4,
            text: " Analytics Dashboard:",
            p: " Track frequency and type of doubts per subject.",
        },
    ]


    return (
        <>
            <div className="w-[90%] h-auto  mx-auto py-10">
                <h1 className="Text_Color  font-bold text-center text-2xl md:text-4xl  my-2">Services </h1>
                <div className="slider-container ">
                    <Slider {...settings}>
                        {
                            Services.map(({ id, text, p }) => (
                                <div key={id} className=" px-5 ">
                                    <div className="h-[200px] lg:h-[150px] p-2 my-5 rounded-xl Box_Shedow">
                                        <h1 className=" Text_Color font-bold text-2xl">{text}</h1>
                                        <p className=" text-md">{p}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>

            </div>

        </>
    )
}

export default Services