import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-start">
                    <Link to='/'>Logo</Link>
                    <h1 className=" text-ellipsis">Best co-working spaces 2023</h1>
                </div>
                <div className="flex items-center gap-8 max-md:hidden navbar-center">
                    <Link to='/work'>Work</Link>
                    <Link to='/private'>Private Offices</Link>
                    <Link>Events</Link>
                    <Link to='/about' className="hover:link">About</Link>
                </div>
                <div className="navbar-end">
                    <span><CiSearch /></span>
                    <span><IoMenu /></span>
                    <button className="m-2 btn btn-outline ">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header