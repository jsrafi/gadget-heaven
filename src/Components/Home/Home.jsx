import { useEffect } from "react";
import Banner from "../Banner/Banner";


const Home = () => {
    useEffect(()=>
        {
            document.title= "Home | Gadget-Heaven"
        },[])
    return (
        <div className="max-w-[1250px] mx-auto">
            <Banner></Banner>
            
        </div>
    );
};

export default Home;