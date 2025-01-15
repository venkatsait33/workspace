import Header from '../../components/Header'
import Cover from './Cover'
import './cover.css'
import img1 from '../../assets/cover-images/cv1.avif'
import img2 from '../../assets/img-2.webp'
import img3 from '../../assets/cover-images/cv3.avif'
import { FaRegCirclePlay } from "react-icons/fa6";
import About_Footer from '../About/About_Footer'


const Private = () => {
    return (
        <div className='bg-white '>
            <div>
                <Header />
            </div>
            <div className=''>
                <Cover />
                <div className='p-4 m-2'>
                    <div className='flex items-center justify-center w-full gap-2'>
                        <picture>
                            <img src={img1} alt="" className='object-cover w-full md:h-[500px] rounded-lg ' />
                        </picture>
                        <picture>
                            <img src={img3} alt="" className='object-cover w-full md:h-[500px] rounded-lg ' />
                        </picture>
                    </div>
                    <div className='relative mt-2'>
                        <picture>
                            <img src={img2} alt="" className='object-center w-full h-[500px] rounded-lg ' />
                        </picture>
                        <div className='absolute text-[70px] text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                            <FaRegCirclePlay className='' />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <About_Footer/>
            </div>
        </div>
    )
}

export default Private