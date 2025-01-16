import cv2 from '../assets/cover-images/cv2.avif'
import cv3 from '../assets/cover-images/cv3.avif'
import cv4 from '../assets/cover-images/cv4.avif'
import cv5 from '../assets/cover-images/cv5.avif'

const spaces = [
    {
        title: "Open Desks",
        description: 'Great for freelancers and small teams',
        image: cv2,
    },
    {
        title: "Meeting Rooms",
        description: "Equipped with modern A/V tech",
        image: cv3,
    },
    {
        title: "Virtual Office",
        description: "Mail service and meeting room access",
        image: cv4,
    }
]

const Explore_spaces = () => {
    return (
        <div>
            <div className=''>
                <h1 className='mb-2 text-3xl text-center text-black'>Explore Spaces</h1>
            </div>
            <div className='flex items-center justify-center'>

                <div className='grid gap-10 mt-4 max-sm:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <div className="singleCard">
                            <img
                                src={cv5} // Replace this with your image URL
                                alt="Office Space"
                                className="transition duration-200 singleCard-image hover:scale-110"
                            />
                            <div className=" singleArrow-button">
                                <div className=' singleArrow-icon'>

                                    <span>View</span>
                                    <span>Available</span>
                                    <span>Dates</span>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h3 className="text-black">Private Office</h3>
                            <p className="text-black">Secluded, secure and fully furnished</p>
                        </div>
                    </div>

                    {spaces.map((item, index) => {
                        return (
                            <div key={index} className=''>
                                <div className="card" >
                                    <img
                                        src={item.image} // Replace this with your image URL
                                        alt="Office Space"
                                        className="transition duration-200 hover:scale-110 card-image"
                                    />
                                    <div className="arrow-button">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="arrow-icon"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                                <div className=''>
                                    <h3 className="text-black">{item.title}</h3>
                                    <p className="text-black">{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Explore_spaces