import { NavLink, useLocation } from "react-router-dom";
import cart from '../../assets/cart.png'
import love from '../../assets/love.png'
import './Header.css'


const Header = () => {
    const liData = <nav className="flex gap-10">
     <NavLink to="/">Home</NavLink>
     <NavLink to="/statistics">Statistics</NavLink>
     <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>

    const location = useLocation();
    const backgroundColor = location.pathname === "/"? "bg-[#9538E2] text-black md:text-white" : "bg-slate-100 text-black"
    return (
       <div className="pt-1">
         <div className={`navbar ${backgroundColor} mt-8 max-w-[1250px] mx-auto rounded-t-2xl `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul id="ul-color"
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {liData}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {liData}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">
                <button className="btn btn-ghost btn-circle">
                    <img src={cart} alt="" />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <img src={love} alt="" />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
       </div>
    );
};

export default Header;