

const Footer = () => {
    return (
        <div className="text-center flex flex-col gap-5 bg-white pt-10 pb-10">
            <h1 className="text-3xl font-bold">Gadget Heaven</h1>
            <p className="text-[#09080fa1]">Leading the way in cutting-edge technology and innovation.</p>
            <hr className="my-3 text-slate-100"/>
            <div className="flex justify-around">
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Services</h4>
                    <p className="text-[#09080fa1]">Product Support</p>
                    <p className="text-[#09080fa1]">Order Tracking</p>
                    <p className="text-[#09080fa1]">Shipping & Delivery</p>
                    <p className="text-[#09080fa1]">Returns</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Company</h4>
                    <p className="text-[#09080fa1]">About Us</p>
                    <p className="text-[#09080fa1]">Careers</p>
                    <p className="text-[#09080fa1]">Contact</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Legal</h4>
                    <p className="text-[#09080fa1]">Terms of Service</p>
                    <p className="text-[#09080fa1]">Privacy Policy</p>
                    <p className="text-[#09080fa1]">Cookie Policy</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;