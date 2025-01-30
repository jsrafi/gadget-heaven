import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredList } from "../../Utilities/Utilities";
import CartDetails from "./CartDetails";
import edit from "../../assets/edit.png"


const Cart = () => {
    const products = useLoaderData();
    const [product,setProduct]= useState([]);

    useEffect(()=>
        {
          const storedList = getStoredList()
          const storedListInt = storedList.map(list => parseInt(list));
          const mainList = products.filter(listId => storedListInt.includes(listId.product_id))
          setProduct(mainList);

          

        },[])

        let totalPrice = 0;
        product.map(item=> totalPrice += item.price);
        console.log(totalPrice)
    return (
        <div className="max-w-[1200px] mx-auto my-10 ">
            
            <div className="flex justify-between">
            <h1 className="text-2xl font-bold">Cart: {product.length}</h1>
            <div className="flex gap-5 items-center">
                <h1 className="text-2xl font-bold">Total Cost: ${totalPrice}</h1>
                <button className="flex font-bold text-lg gap-2 btn rounded-3xl text-purple-500 border border-purple-500">Sort by Price <img src={edit} alt="" /></button>
                <button className="px-5 py-5 text-lg text-white bg-gradient-to-tl from-purple-500 to-pink-500 btn rounded-3xl">Purchase</button>
            </div>
            </div>

            {
                product.map(items => <CartDetails key={items.product_id} items={items}></CartDetails>)
            }
        </div>
    );
};

export default Cart;