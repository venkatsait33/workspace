import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="text-black bg-white navbar">
                <div className="space-x-2 navbar-start">
                    <div className="lg:flex max-md:flex-col md:space-x-4 lg:items-center max-sm:justify-start max-sm:flex-col rounded-r-xl">
                        <Link to='/' className="text-xl font-bold text-black">WORKSPC</Link>
                        <span className="text-sm text-black rounded-md ">
                            Best Co-Working Space 2023
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-8 max-md:hidden navbar-center">
                    <Link to='/work'>Work</Link>
                    <Link to='/private'>Private Offices</Link>
                    <Link to='/about' className="hover:link">About</Link>
                </div>
                <div className="navbar-end">
                    <span><CiSearch /></span>
                    <div className="dropdown dropdown-end md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="text-xl">
                                <IoMenu />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <Link className="text-white hover:link" to='/work '>Work</Link>
                            </li>
                            <li>  <Link className="text-white hover:link" to='/private'>Private Offices</Link></li>

                            <li>  <Link to='/about' className="text-white hover:link">About</Link></li>
                        </ul>
                    </div>
                    <button className="m-2 text-white bg-black btn btn-outline btn-sm">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header