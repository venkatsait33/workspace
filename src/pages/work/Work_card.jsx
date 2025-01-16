import { FaArrowCircleRight, FaUser } from 'react-icons/fa';
import { AiFillDollarCircle } from "react-icons/ai";
import ci1 from '../../assets/card/card-img-1.jpg';
import ci2 from '../../assets/card/card-img-2.webp'
import ci3 from '../../assets/card/card-img-3.jpg'
import ci4 from '../../assets/card/card-img-4.jpg'

const word_data = [{
    title: "Private Office",
    image: ci1,
    description: "Experience privacy and productivity in our fully fumbshest secure iuste Offices Tallered for professionals, these secluded affices provide the ideal setting Tim focused work whether for office workers or freelancers",
    persons: '1-4 persons',
    price: "699/month"
}, {
    title: "Virtual Office",
    description: "Establish your professional presence with sur Virtual Office package Enjoy mal services and access to meeting rooms, allowing you to project a prestigious image while maintaining flexibility and cost savings",
    persons: '4-20 persons',
    price: '999/month',
    image: ci2,
}, {
    title: "Meeting Room",
    description: "Elevate your meetings in our Meeting Rooms, equipped with state-of-the-art audio/visual technology. Host presentations and brainstorming sessions seamlessly in this inspiring, professional setting.",
    persons: '4-12 persons',
    price: '49/hour',
    image: ci3,
}, {
    title: "Open Desks",
    description: 'Ideal for freelancers and small teams, our Open Desks offer an open, energizing environment. Work efficiently in our high quality shared space that fosters work collaboration and team innovation.',
    persons: '2 Persons per Desk',
    price: '199/month',
    image: ci4,
}]

const Work_card = () => {
    return (
        <div className='relative flex flex-col gap-8 p-8 '>
            <div className='grid gap-4 max-sm:space-y-4 md:grid-cols-2 '>

                {
                    word_data.map((item, index) => {
                        return (
                            <div key={index}>
                                <div id='outer' className='transition duration-200 hover:scale-95 ' style={{
                                    backgroundImage: `url(${item.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                }}>
                                    <div id="inner-container">
                                        <div className="innertext"><div className='flex items-center gap-4'>
                                            <span>{item.title}</span>
                                            <span>
                                                <FaArrowCircleRight />
                                            </span>
                                        </div></div>

                                    </div>
                                </div>
                                <p>{item.description}</p>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <p className='flex items-center gap-2 text-black'><span>
                                            <FaUser />
                                        </span> <span>{item.persons}</span> </p>
                                        <p className='flex items-center gap-2 text-black'> <span><AiFillDollarCircle /></span><span>from ${item.price}</span></p>
                                    </div>
                                    <button className='btn btn-sm'>Book Now</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work_card