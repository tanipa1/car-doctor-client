import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg';
import './NavBar.css';

const NavBar = () => {
    const navItem = <>
        <li><Link to=''>Home</Link></li>
        <li><Link to=''>About</Link></li>
        <li><Link to=''>Services</Link></li>
        <li><Link to=''>Blog</Link></li>
        <li><Link to=''>Contact</Link></li>
    </>
    return (
        <div className="h-24 mb-4">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-outline nav-btn">Appointment</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;