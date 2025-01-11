import Cards from './Cards'
import Cover from './Cover'
import Explore_spaces from './Explore_spaces'
import Our_Values from './Our_Values'
import TestimonialCard from './Testimonial'

const Home = () => {
    return (
        <div className='bg-white'>
            <Cover />
            <Our_Values />
            <Explore_spaces />
            <TestimonialCard />
        </div>
    )
}

export default Home