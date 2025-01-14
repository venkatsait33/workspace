import Header from '../../components/Header'
import Home_Footer from '../../components/Home_Footer'
import TestimonialCard from '../../components/Testimonial'
import Cover from '../Cover'
import Work_card from './Work_card'

const Work = () => {
    return (
        <div className='bg-white'>
            <div className='px-4'>
                <Header />
            </div>
            <div>
                <Cover />
                <Work_card />
                <TestimonialCard />
            </div>
            <Home_Footer />
        </div>
    )
}

export default Work