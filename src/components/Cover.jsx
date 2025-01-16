
import { IoArrowForward } from "react-icons/io5";
import cv4 from '../assets/cover-images/cv4.avif'
import cv1 from '../assets/cover-images/cv1.avif'
import Logos from "./Logos";

import Header from "./Header";

const Cover = () => {
    return (
        <div className="p-2">
            <Header />

            <div
                className="text-white "
                style={{
                    backgroundImage: `url(${cv1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        {/* Navbar */}


                        {/* Hero Section */}
                        <div className="relative flex flex-col items-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between">
                            {/* Left Side */}
                            <div className="pl-2 mt-2 space-y-2">
                                <h2 className="font-bold leading-tight md:text-5xl max-sm:text-3xl">Work Better,</h2>

                                {/* Avatars */}
                                <div className="flex items-center space-x-2 ">
                                    <div className="flex p-1 border rounded-lg backdrop-blur-lg">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s"
                                            alt="User 1"
                                            className="w-10 h-10 border-2 border-white rounded-full"
                                        />
                                        <img
                                            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                                            alt="User 2"
                                            className="w-10 h-10 -ml-3 border-2 border-white rounded-full"
                                        />
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s"
                                            alt="User 3"
                                            className="w-10 h-10 -ml-3 border-2 border-white rounded-full"
                                        />
                                        <div className="w-10 h-10 ml-3 text-2xl text-center border-2 border-white rounded-full">
                                            +
                                        </div>
                                    </div>
                                    <h2 className="font-bold leading-tight md:text-5xl max-sm:text-3xl">Together</h2>
                                </div>
                                {/* Buttons */}
                                <div className="flex justify-start mt-2 lg:flex-col max-md:flex-col lg:gap-4">
                                    <div className='flex items-center gap-2'>
                                        <button className="text-black bg-white btn btn-sm btn-outline ">
                                            Book Now
                                        </button>
                                        <button className="text-white btn btn-sm btn-outline ">
                                            Read More
                                        </button>
                                    </div>

                                    <div className="">
                                        <article className='text-wrap'>
                                            <p className="text-justify text-gray-300 lg:text-lg">
                                                An inspiring co-working environment designed for freelancers and teams to achieve greatness.
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className="coverCard">
                                <div className="px-4 py-4 text-black rounded-lg shadow-lg ">

                                    <p className='px-2 text-xl text-white w-[80%] text-pretty leading-tight'>
                                        Our new location is finally open for public! Get ready for our grand opening promotion.
                                    </p>
                                    <div
                                        style={{
                                            backgroundImage: `url(${cv4})`,

                                        }}
                                        className='p-2 mt-4 rounded-md w-full  md:h-[300px] max-md:h-[200px] bg-cover bg-center'
                                    >

                                    </div>
                                    <div id="cover-card">
                                        <div className="inner-text"><span>New</span></div>
                                        <div className="inner-text"><span>Location</span></div>
                                    </div>

                                </div>
                                <button className="absolute right-2 lg:right-[10px] lg:w-[60px] lg:h-[60px] z-10 flex items-center bg-black rounded-full top-4 lg:top-[10px] btn">

                                    <IoArrowForward className='text-xl ' />
                                </button>
                            </div>
                        </div>



                        {/* Logos Section */}

                    </div>

                </div>

            </div>
            <Logos />
        </div>
    )
}

export default Cover