import { FaArrowRightLong } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdMailOutline } from "react-icons/md";
const About_Footer = () => {
    return (
        <div>
            <div className="flex justify-between px-10 py-10 mt-10 max-md:flex-col max-md:px-5 max-md:py-5">
                <div className="flex-1">
                    <div id="about-footer-card-outer">
                        <div id="" className="absolute flex flex-col  w-[30%] justify-center max-sm:top-[210px] md:top-[190px] lg:top-[270px] max-sm:left-0   rounded-tr-xl  bg-white md:left-0 max-[480px]:top-[220px] ">
                            <div className="flex items-center gap-2 p-2 text-2xl leading-tight text-black bg-transparent">Let&apos;s Keep in</div>

                        </div>
                        <div id="" className="absolute flex flex-col items-center md:w-[70%] lg:w-[65%] justify-center max-sm:left-0 max-sm:w-[90%] max-sm:top-[280px] max-[480px]:top-[292px] md:top-[260px] lg:top-[310px]  rounded-tr-xl bg-white left-0 right-0 max-md:left-[443.5px] ">
                            <div className="flex flex-col w-full gap-2 p-2 text-2xl text-black bg-transparent">
                                <h1>
                                    Touch with Us!
                                </h1>
                                <span className="sm:text-[14px] text-sm leading-tight text-gray-500">
                                    Contact us today to explore the possibilities of our dynamic co-working space. Your ideal workspace in just a message or call away with us
                                </span></div>

                        </div>

                    </div>
                </div>

                <div className="flex flex-col flex-1 p-4 space-y-2">
                    <div className="flex gap-6 md:pr-10 md:pl-10 md:items-center md:justify-between">
                        <div>
                            <h1 className="text-base font-semibold text-black">Company</h1>
                            <ul>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">About us</li>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">Careers</li>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-base font-semibold text-black">Community</h1>
                            <ul>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">Event</li>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">Stories</li>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">Partnership</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-base font-semibold text-black">Resources</h1>
                            <ul>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">
                                    Blog
                                </li>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">FAQ</li>
                                <li className="transition-all duration-300 hover:link hover:text-black hover:scale-110">Support</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="mt-10 text-xl font-semibold text-black">Newsletter</h2>
                        <div className="flex items-center justify-between">
                            <input type="text" placeholder="Enter your email address....." className="w-full max-w-xs bg-transparent input input-ghost" />
                            <FaArrowRightLong className="text-xl font-bold text-black" />
                        </div>
                    </div>
                    <div className="text-xl font-bold divider"></div>

                    <div className="flex flex-col">
                        <div className="flex items-center justify-between text-base font-semibold text-black ">
                            <FaPhoneAlt />
                            <span>(+123)987654321</span>
                        </div>
                        <div className="flex items-center justify-between text-base font-semibold text-black">
                            <MdMailOutline />
                            <span>workspace@demomail.com</span>
                        </div>
                        <div className="flex items-center justify-between text-base font-semibold text-black">
                            <MdLocationPin />
                            <span className="max-sm:text-sm">123 Wanderer Street, Any State,City</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About_Footer