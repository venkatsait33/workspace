import Cover from '../components/Cover'
import Explore_spaces from '../components/Explore_spaces'
import Home_Footer from '../components/Home_Footer'
import Our_Values from '../components/Our_Values'
import PricingPlan from '../components/PricingPlan'
import TestimonialCard from '../components/Testimonial'
import cv1 from '../../src/assets/cover-images/cv1.avif'

const Home = () => {
    return (
        <div className='bg-white'>
            <Cover cover={cv1} />
            <Our_Values />
            <Explore_spaces />
            <TestimonialCard />
            <PricingPlan />
            <Home_Footer/>
        </div>
    )
}

export default Home