
import ci1 from '../../assets/card/card-img-1.jpg';
import ci2 from '../../assets/card/card-img-2.webp'
import ci3 from '../../assets/card/card-img-3.jpg'
import ci4 from '../../assets/card/card-img-4.jpg'
import ci5 from '../../assets/card/card-img-5.jpg'

const About_cards = () => {
    return (
        <div className='h-full p-4'>
            <div className='flex items-center justify-between p-2'>
                <h1 className='text-xl font-bold text-black'>A Glimpse Inside</h1>
                <p>See More</p>
            </div>
            <div className='grid gap-4 lg:grid-cols-2'>
                <div className=''>
                    <picture>
                        <img src={ci1} alt="" className='lg:h-[700px]  w-full object-cover rounded-lg' />
                    </picture>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>
                        <picture>
                            <img src={ci2} alt="" className='w-full h-[200px] object-cover rounded-lg' />
                        </picture>
                    </div>
                    <div className='grid gap-3 lg:grid-cols-2'>
                        <div>
                            <picture>
                                <img src={ci3} alt="" className='lg:h-[490px] w-full object-cover rounded-lg' />
                            </picture>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <picture><img src={ci4} alt="" className='w-full h-[240px] object-cover rounded-lg ' /></picture>
                            <picture><img src={ci5} alt="" className='w-full h-[240px] object-cover rounded-lg ' /></picture>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About_cards