import { CiPlay1 } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdLocationPin, MdMailOutline } from "react-icons/md";
const Home_Footer = () => {
    return (
        <div>
            <div className="flex justify-between px-20 py-10 mt-10 max-md:flex-col max-md:px-5 max-md:py-5">
                <div className="flex-col flex-1 p-4 space-y-2">
                    <div>
                        <h1 className="text-base font-semibold text-black">Let &apos; s Keep in Touch with Us!</h1>
                    </div>
                    <div>
                        <p>
                            Contact us today to explore the possibilities of our dynamic co-working space.Your ideal workspace is just a message or call away with us.
                        </p>
                    </div>
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
                            <span>123 Wanderer Street, Any State,City</span>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="flex items-center justify-between pl-10 pr-10">
                        <div>
                            <h1 className="text-base font-semibold text-black">Company</h1>
                            <ul>
                                <li>About us</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-base font-semibold text-black">Community</h1>
                            <ul>
                                <li>Event</li>
                                <li>Stories</li>
                                <li>Partnership</li>
                            </ul>
                        </div>
                        <div>
                            <h1 className="text-base font-semibold text-black">Resources</h1>
                            <ul>
                                <li>
                                    Blog
                                </li>
                                <li>FAQ</li>
                                <li>Support</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="flex-1">
                    <div id="footer-card-outer">
                        <div className="absolute flex top-[300px]  flex-col gap-4 w-[350px] pl-4">
                            <h2 className="text-xl font-semibold text-white ">Newsletter</h2>
                            <div className="flex items-center justify-between w-full gap-2 px-2 border border-white rounded-lg">
                                <input type="text" placeholder="Enter your email address....." className="w-full text-white bg-transparent input input-ghost placeholder:text-white" />
                                <FaArrowRightLong className="text-xl font-bold text-white" />
                            </div>
                        </div>
                        <div id="" className="absolute flex flex-col items-center justify-center top-[352px] rounded-br-lg rounded-tl-xl bg-white max-md:left-[443.5px] lg:left-[396.5px]">
                            <div className="flex items-center gap-2 p-2 text-2xl text-black bg-transparent"><span>Play Company Video</span> <CiPlay1 /></div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home_Footer