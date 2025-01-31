import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredList } from "../../Utilities/Utilities";
import CartDetails from "./CartDetails";
import edit from "../../assets/edit.png"
import { purchaseList } from "../../Utilities/purchase";
import congrats from "../../assets/Group.png"


const Cart = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState([]);
    const [prod, setProd] = useState([])
    const [sort, setSort] = useState(false);



    useEffect(() => {
        const storedList = getStoredList()
        const storedListInt = storedList.map(list => parseInt(list));
        const mainList = products.filter(listId => storedListInt.includes(listId.product_id))
        setProduct(mainList);
        setProd(mainList)
    }, [])



    const handleSort = () => {
        setSort(!sort);
        if (sort) {
            setProduct([...prod])
        }
        else {
            const sortedList = [...product].sort((a, b) => b.price - a.price);
            setProduct(sortedList);
        }
    }

    let totalPrice = 0;
    product.map(item => totalPrice += item.price);
    
    let newPrice = 0;
    prod.map(item => newPrice += item.price);



    const handlePurchase = () => {       
        purchaseList()
        setProduct([])
        setProd([])
    }
    const handleModal = () =>
    {
        document.getElementById('my_modal_5').showModal()
        purchaseList()
        setProduct([])
        
        
    }



    



    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        if (product.length < 1) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }, [product]);


    const navigation = useNavigate();

    const handleNavigate =()=>
    {
        navigation("/");
        setProd([]);
    }


    return (
        <div className="max-w-[1200px] mx-auto my-10 ">

            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Cart: {product.length}</h1>
                <div className="flex gap-5 items-center">
                    <h1 className="text-2xl font-bold">Total Cost: ${totalPrice}</h1>
                    <button onClick={handleSort} className="flex font-bold text-lg gap-2 btn rounded-3xl text-purple-500 border border-purple-500">{sort ? 'Unsort' : 'Sort by Price'} <img src={edit} alt="" /></button>
                    <button id="purchase" onClick={isDisabled? handlePurchase : handleModal} className={`px-5 py-5 text-lg text-white  ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-tl from-purple-500 to-pink-500'} btn rounded-3xl`}>Purchase</button>
                </div>
            </div>

            {
                product.map(items => <CartDetails key={items.product_id} items={items}></CartDetails>)
            }


            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn hidden" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center text-center justify-center ">
                    <img src={congrats} alt="" />
                    <h3 className="font-bold text-lg mt-3">Payment Done Successfully</h3>
                    <p className="py-4">Total : ${[newPrice]}</p>
                    <div className="modal-action">
                        <form method="dialog">
                          
                            <button onClick={handleNavigate} className="btn w-96">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;