import { NavLink, Outlet } from "react-router-dom";
import './Dashboard.css'
import { useEffect } from "react";


const Dashboard = () => {
    useEffect(()=>
        {
            document.title = "Dashboard | Gadget-Heaven"
        },[])
    return (
        <div>
            <div className="flex flex-col gap-5 text-center justify-center items-center bg-[#9538E2] pt-10 pb-10">
                <h3 className="text-3xl text-white font-bold">Dashboard</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div className="flex gap-10 items-center">
                    <NavLink className="text-white border border-white btn bg-[#9538E2] px-10 rounded-3xl" to="cart">Cart</NavLink>
                    <NavLink className="text-white border border-white btn bg-[#9538E2] px-10 rounded-3xl" to="wish">Wishlist</NavLink>
                    
                </div>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;