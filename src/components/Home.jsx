import Cover from './Cover'
import Explore_spaces from './Explore_spaces'
import Home_Footer from './Home_Footer'
import Our_Values from './Our_Values'
import PricingPlan from './PricingPlan'
import TestimonialCard from './Testimonial'

const Home = () => {
    return (
        <div className='bg-white'>
            <Cover />
            <Our_Values />
            <Explore_spaces />
            <TestimonialCard />
            <PricingPlan />
            <Home_Footer/>
        </div>
    )
}

export default Home