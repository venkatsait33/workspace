import { FaCheckCircle } from "react-icons/fa";
const Cover = () => {
    return (
        <div className=""> <div className="p-4">
            <div id="private-outer" style={{
                backgroundImage: `url("/src/assets/card/card-img-3.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <div id="private-container">
                    <div className="private_innerText"> &nbsp; &nbsp; <span>Private</span></div>
                    <div className="private_innerText_1"><span>Offices</span></div>
                </div>

                <div className="absolute bottom-0 lg:left-[75%] max-md:left-[60%] rounded-tl-[10px] bg-white p-2 ">
                    <p className="text-sm text-gray-800 text-pretty">Immerse yourself in unparalleled business professionalism within our Executive Private Offices for Business.</p>
                </div>

            </div>
            <div className="flex mt-2 max-md:flex-col">
                <div className="flex flex-col flex-1 gap-2 mt-4">
                    <div>
                        <p className="text-pretty">Welcome to the epitome of workspace exclusivity with our Private Office service. Elevate your professional experience with a dedicated, fully furnished office space that reflects your brand identity. Our Private Offices offer a secluded oasis where productivity thrives, complete with high-speed internet, ergonomic furniture, and personalized amenities. Enjoy the luxury of a secure and private workspace, while still benefiting from the vibrant community and networking opportunities that define our co-working ethos</p>
                    </div>
                    <div className="flex flex-col flex-1 gap-2 ">
                        <p>Enjoy our personal office with the ultimate facilities that we have prepared for you</p>
                        <div>
                            <p className="flex items-center gap-2 font-bold text-black" ><span><FaCheckCircle /></span> Personalized Concierge Service</p>
                            <p className="flex items-center gap-2 font-bold text-black"><span><FaCheckCircle /></span> Customizable Workspace Design</p>
                            <p className="flex items-center gap-2 font-bold text-black"><span><FaCheckCircle /></span>Complimentary Refreshments</p>
                            <p className="flex items-center gap-2 font-bold text-black"><span><FaCheckCircle /></span>Premium Business Address</p>
                        </div>
                        <p>These meticulously designed, fully furnished offices offer an exclusive, secure environment, fostering a sophisticated atmosphere for focused work. Success begins at WorkScape.</p>
                    </div>
                </div>
                <div className="bg-[#f4f1e8] p-4 rounded-lg flex flex-col gap-2 md:h-[300px] mt-5">
                    <div>
                        <p>Size</p>
                        <p className="text-xl font-bold text-black">150 - 300 m²</p>
                    </div>
                    <div>
                        <p>Capacity</p>
                        <p className="text-xl font-bold text-black">1-4 Persons</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p className="text-xl font-bold text-black">Start from $699/mo</p>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <p className="text-pretty">24/7 secure access for maximum flexibility and professionalism</p>
                        <button className="text-black bg-white btn btn-sm btn-outline">Book Now</button>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default Cover