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
                <div className="navbar-end">
                    <span><CiSearch /></span>
                    <span><IoMenu /></span>
                    <button className="btn btn-outline m-2 ">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Header