import { useLoaderData, useParams } from "react-router-dom";
import rate from "../../assets/rate.png"
import ratings from "../../assets/starts.png"
import cart from "../../assets/cart2.png"
import love from "../../assets/love.png"
import { addToStoredList } from "../../Utilities/Utilities";


const ItemDetail = () => {
    const { itemId } = useParams();
    const id = parseInt(itemId)
    const data = useLoaderData()
    const product = data.find(item => item.product_id === id);
    const {product_id, product_title, product_image, price, availability, description, Specification, rating } = product;


    const handleStoredList =(id)=>
    {
        addToStoredList(id)
    }
    return (

        <div className="relative mb-96">
            <div className="flex flex-col gap-5 text-center justify-center items-center bg-[#9538E2] pt-10 pb-40">
                <h3 className="text-3xl text-white font-bold">Product Details</h3>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            </div>

            <div className=" absolute md:top-[110px] md:left-1/2 md:transform md:-translate-x-1/2 w-full max-w-[1100px] mx-auto border border-white shadow-2xl rounded-2xl bg-white flex gap-2 my-10 mb-40">
                <div className=" w-[50%] p-5 ">
                    <img className="w-full border border-white shadow-2xl rounded-2xl" src={product_image} alt="" />
                </div>

                <div className="py-3 flex flex-col gap-3">
                    <h3 className="text-2xl font-bold ">{product_title}</h3>
                    <p className="text-lg font-semibold">Price: ${price}</p>
                    <p className="w-fit btn rounded-3xl text-green-500 border border-green-500 font-bold">{
                        availability ? "In Stock" : "Not In Stock"
                    }</p>
                    <p className=" text-gray-500">{description}</p>
                    <div>
                        <h4 className="font-bold">Specifications:</h4>
                        <div className="flex flex-col gap-2 my-2 text-gray-500">
                            <p>1. {Specification[0]}</p>
                            <p>2. {Specification[1]}</p>
                            <p>3. {Specification[2]}</p>
                            <p>4. {Specification[3]}</p>
                        </div>
                    </div>
                    <div>
                        <img src={rate} alt="" />
                    </div>
                    <div className="flex gap-2">
                        <img src={ratings} alt="" />
                        <p className=" font-semibold w-7 h-7  rounded-full bg-gray-300 text-center flex justify-center items-center">{rating}</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button onClick={()=> handleStoredList(product_id)} className="flex gap-2 bg-purple-500 text-white btn rounded-3xl">Add to Cart <img src={cart} alt="" /> </button>
                        <button><img src={love} alt="" /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ItemDetail;