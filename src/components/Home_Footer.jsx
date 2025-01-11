import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdMailOutline } from "react-icons/md";
const Home_Footer = () => {
    return (
        <div>
            <div className="flex">
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

                </div>
            </div>
        </div>
    )
}

export default Home_Footer