import About_cards from './About_cards'
import Header from '../../components/Header'
import Logos from '../../components/Logos'
import Our_Values from '../../components/Our_Values'
import Work_Facilities from '../../components/Work_Facilities'
import Cover from '../Cover'
import './about.css'
import About_Footer from './About_Footer'

const About = () => {
    return (
        <div className='relative bg-white'>
            <Header />
            <div>
                <Cover text='About' text1='Workspace' />
                <div className='flex items-center m-4'>
                    <div className='w-[30%]'>
                        <p>Empowering Collaboration</p>
                        <p>Fostering Innovation</p>
                    </div>
                    <div className='w-[70%]'>
                        <p className='text-black md:text-xl text-pretty text-semibold'>
                            Embark on a journey with WorkScape, a dynamic co- working space where ambition meets community. We redefine the work experience, providing flexible solutions for individuals and teams to thrive in our own vibrant and collaborative environment. Our meticulously designed spaces inspire creativity, foster connections, and provide the ideal backdrop for innovation.
                        </p>
                    </div>
                </div>
                <Our_Values />
                <Work_Facilities />
                <div className='p-2'>
                    <Logos />
                </div>
                <About_cards />
            </div>
            <About_Footer />
        </div>
    )
}

export default About