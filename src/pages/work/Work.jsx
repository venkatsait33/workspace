import Header from '../../components/Header'
import Home_Footer from '../../components/Home_Footer'
import TestimonialCard from '../../components/Testimonial'
import Cover from '../Cover'
import Work_card from './Work_card'
import coverImg from '../../assets/cover-images/cv4.avif'

const Work = () => {
    return (
        <div className='bg-white'>
            <div className='px-4'>
                <Header />
            </div>
            <div>
                <Cover text='Work in' text1='Workspace' cover={coverImg} />
                <Work_card />
                <TestimonialCard />
            </div>
            <Home_Footer />
        </div>
    )
}

export default Work