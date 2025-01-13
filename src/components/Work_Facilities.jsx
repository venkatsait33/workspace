import { FaArrowRight } from "react-icons/fa"

const Work_Facilities = () => {
    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold text-center text-black text">Our Work Facilities</h1>
            <div className="relative flex p-4 max-md:grid-cols-2 max-md:grid max-md:gap-2">
                <div className="flex-1 h-full p-2 max-md:w-[350px] max-md:order-1 ">
                    <div>
                        <img src="/src/assets/cover-images/cv3.avif" alt="" className="w-full max-md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex flex-col gap-2 text-xl font-bold text-black">
                            <span>Modern</span>
                            <span>Meeting Room</span>
                        </div>
                        <button className="text-white bg-black rounded-full btn btn-sm">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="flex-2 max-md:order-2 max-md:w-full">
                    <div id="AboutCard">
                        <div>
                            <img src="/src/assets/cover-images/cv1.avif" alt="" className="object-cover lg:w-full  h-[620px] rounded-lg" />
                        </div>
                        <div className="absolute right-0 flex flex-col items-center justify-center w-full h-full left-[110px] -top-64">
                            <div className="flex flex-col overflow-hidden text-sm text-white text-wrap"><span>
                                Spaces designed for relaxation
                            </span>
                                <span> and collaboration,completed</span>
                                <span> with fun recreational zones.</span></div>
                        </div>
                        <div id="About-card">
                            <div className="about-text"><span>Comfortable</span></div>
                            <div className="about-text"><span>Lounge Areas &nbsp;</span></div>
                        </div>

                    </div>

                </div>


                <div className="flex-1 h-full p-2 max-md:w-[350px] max-md:order-1 ">
                    <div>
                        <img src="/src/assets/cover-images/cv3.avif" alt="" className="w-full max-md:h-[400px] lg:h-[500px] object-cover rounded-lg" />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex flex-col gap-2 text-xl font-bold text-black">
                            <span>Modern</span>
                            <span>Meeting Room</span>
                        </div>
                        <button className="text-white bg-black rounded-full btn btn-sm">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work_Facilities