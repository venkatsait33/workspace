import cv1 from '../assets/cover-images/cv1.avif'
import { CiSearch } from "react-icons/ci";
import { IoArrowForward, IoHandLeft, IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Cover = () => {
    return (
        <>

            <div
                className="bg-gray-900 text-white"
                style={{
                    backgroundImage: "url('/src/assets/cover-images/cv1.avif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="bg-black bg-opacity-50">
                    <div className="max-w-7xl mx-auto pt-2 lg:px-8">
                        {/* Navbar */}
                        <nav className="flex justify-between items-center ">
                            <div className="flex items-center bg-white space-x-2 w-[30%] rounded-r-xl">
                                <h1 className="text-xl font-bold text-black">WORKSPC</h1>
                                <span className=" text-black text-sm  rounded-md">
                                    Best Co-Working Space 2023
                                </span>
                            </div>
                            <div className="flex items-center space-x-6 px-6">
                                <button>
                                    <i className="fas fa-search text-xl"></i>
                                </button>
                                <button className="bg-black text-white px-4 py-2 rounded-lg">
                                    Login
                                </button>
                            </div>
                        </nav>

                        {/* Hero Section */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between py-12 gap-10 relative">
                            {/* Left Side */}
                            <div className=" space-y-">
                                <h2 className="text-5xl font-bold leading-tight">Work Better,</h2>

                                {/* Avatars */}
                                <div className="flex items-center space-x-2  ">
                                    <div className="flex border p-1 rounded-lg backdrop-blur-lg">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s"
                                            alt="User 1"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                        />
                                        <img
                                            src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                                            alt="User 2"
                                            className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                                        />
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrKxfjTf49GAtu0PpFXK7mKBgqyJ5MfJCgQw&s"
                                            alt="User 3"
                                            className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                                        />
                                        <div className="w-10 h-10 rounded-full border-2 border-white ml-3 text-center text-2xl">
                                            +
                                        </div>
                                    </div>
                                    <h2 className="text-5xl font-bold leading-tight">Together</h2>
                                </div>
                                {/* Buttons */}
                                <div className="flex max-md:flex-col justify-between items-center lg:gap-10">
                                    <div className='flex items-center gap-2'>
                                        <button className="btn btn-sm bg-white text-black btn-outline ">
                                            Book Now
                                        </button>
                                        <button className="btn btn-sm btn-outline text-white ">
                                            Read More
                                        </button>
                                    </div>

                                    <div>
                                        <article className='text-wrap'>
                                            <p className="lg:text-lg text-gray-300 text-justify">
                                                An inspiring co-working environment designed for freelancers and teams to achieve greatness.
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side */}
                            <div className=" relative bg-white rounded-lg rounded-t-lg shadow-md  p-6  w-[400px] max-md:mt-10 ">
                                <div className=" text-black rounded-lg rounded-tr-[100px] shadow-lg bg-slate-100 space-y-4">
                                    <h3 className="font-bold text-lg ml-2 ">New Location</h3>
                                    <p>
                                        Our new location is finally open for public! Get ready for our
                                        grand opening promotion.
                                    </p>
                                    <img
                                        src="/src/assets/cover-images/cv2.avif"
                                        alt="New Location"
                                        className="w-full h-40 object-cover rounded-lg"
                                    />
                                    <div className='absolute top-[65%] bg-white p-2  rounded-r-lg shadow-md'>
                                        <h1>New </h1>
                                    </div>
                                    <div className='absolute top-[75%] bg-white p-2 rounded-r-lg s'>
                                        <h1>Location</h1>
                                    </div>
                                    <button className="flex absolute items-center top-0 right-0 btn rounded-full">

                                        <IoArrowForward className='text-md ' />
                                    </button>
                                </div>
                            </div>
                        </div>



                        {/* Logos Section */}

                    </div>

                </div>

            </div>
            <div className="flex justify-between items-center">
                <img src="/src/assets/logos/logo-2-1.svg" alt="Logo 1" className="h-14" />
                <img src="/src/assets/logos/logo-4.svg" alt="Logo 2" className="h-14" />
                <img src="/src/assets/logos/logo-5-1.svg" alt="Logo 3" className="h-14" />
                <img src="/src/assets/logos/logoipsum.png" alt="Logo 4" className="h-14" />
                <img src="/src/assets/logos/logo-7.svg" alt="Logo 5" className="h-14" />
            </div>
        </>
    )
}

export default Cover