
import { IoArrowForward } from "react-icons/io5";
import cv4 from '../assets/cover-images/cv4.avif'
import Logos from "./Logos";

const Cover = () => {
    return (
        <>

            <div
                className="text-white bg-gray-900"
                style={{
                    backgroundImage: "url('/src/assets/cover-images/cv1.avif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="bg-black bg-opacity-50">
                    <div className="pt-2 mx-auto max-w-7xl lg:px-8">
                        {/* Navbar */}
                        <nav className="flex items-center justify-between ">
                            <div className="flex items-center bg-white space-x-2 w-[30%] rounded-r-xl">
                                <h1 className="text-xl font-bold text-black">WORKSPC</h1>
                                <span className="text-sm text-black rounded-md ">
                                    Best Co-Working Space 2023
                                </span>
                            </div>
                            <div className="flex items-center px-6 space-x-6">
                                <button>
                                    <i className="text-xl fas fa-search"></i>
                                </button>
                                <button className="px-4 py-2 text-white bg-black rounded-lg">
                                    Login
                                </button>
                            </div>
                        </nav>

                        {/* Hero Section */}
                        <div className="relative flex flex-col items-center gap-10 py-12 lg:flex-row lg:items-center lg:justify-between">
                            {/* Left Side */}
                            <div className=" space-y-">
                                <h2 className="text-5xl font-bold leading-tight">Work Better,</h2>

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
                                    <h2 className="text-5xl font-bold leading-tight">Together</h2>
                                </div>
                                {/* Buttons */}
                                <div className="flex items-center justify-between max-md:flex-col lg:gap-10">
                                    <div className='flex items-center gap-2'>
                                        <button className="text-black bg-white btn btn-sm btn-outline ">
                                            Book Now
                                        </button>
                                        <button className="text-white btn btn-sm btn-outline ">
                                            Read More
                                        </button>
                                    </div>

                                    <div>
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

                                    <p className='px-4 text-xl text-white w-[80%]'>
                                        Our new location is finally open for public! Get ready for our grand opening promotion.
                                    </p>
                                    <div
                                        style={{
                                            backgroundImage: `url(${cv4})`,
                                            width: "100%",
                                            height: "350px",
                                        }}
                                        className='p-2 mt-4 rounded-md'
                                    >

                                    </div>
                                    <div id="cover-card">
                                        <div className="inner-text"><span>New</span></div>
                                        <div className="inner-text"><span>Location</span></div>
                                    </div>

                                </div>
                                <button className="absolute right-[10px] w-[60px] h-[60px] z-10 flex items-center bg-black rounded-full top-[10px] btn">

                                    <IoArrowForward className='text-xl ' />
                                </button>
                            </div>
                        </div>



                        {/* Logos Section */}

                    </div>

                </div>

            </div>
            <Logos />
        </>
    )
}

export default Cover