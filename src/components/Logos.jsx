import logo1 from '../assets/logos/logo-2-1.svg'
import logo2 from '../assets/logos/logo-4.svg'
import logo3 from '../assets/logos/logo-5-1.svg'
import logo4 from '../assets/logos/logoipsum.png'
import logo5 from '../assets/logos/logo-7.svg'


const Logos = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <img src={logo1} alt="Logo 1" className="h-14" />
        <img src={logo2} alt="Logo 2" className="h-14" />
        <img src={logo3} alt="Logo 3" className="h-14" />
        <img src={logo4} alt="Logo 4" className="h-14" />
        <img src={logo5} alt="Logo 5" className="h-14" />
      </div>
    </div>
  )
}

export default Logos