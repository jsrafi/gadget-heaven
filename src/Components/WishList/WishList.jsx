import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishList } from "../../Utilities/wish";
import WishDetails from "../WishDetails/WishDetails";


const WishList = () => {
    const products = useLoaderData();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const storedList = getWishList()
        const storedListInt = storedList.map(list => parseInt(list));
        const mainList = products.filter(listId => storedListInt.includes(listId.product_id))
        setProduct(mainList);

    }, [])

    return (
        <div className="max-w-[1200px] mx-auto my-10">
            <h1 className="text-3xl font-bold ">Wish</h1>
            <div>
                {
                    product.map(items => <WishDetails key={items.product_id} items={items}></WishDetails>)
                }
            </div>
        </div>
    );
};

export default WishList;