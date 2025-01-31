import { toast } from "react-toastify";

const getWishList =()=>
    {
     const storedListStr = localStorage.getItem('wish')
     if(storedListStr)
     {
        const storedList = JSON.parse(storedListStr);
        return storedList;
     }
     else
     {
        return [];
     }
    }
    const addToWishList =(id)=>
    {
        const storedList = getWishList();
        if(storedList.includes(id))
        {
            toast.warn('Wish Already Added To The Wish-List', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        
                        });
        }
        else
        {
            toast.success('Your Wish Added Successfully To The Wish-List', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        
                        });
            storedList.push(id)
            const storedListStr = JSON.stringify(storedList);
            localStorage.setItem('wish', storedListStr)
        }
    }
    
    export {addToWishList, getWishList}