import { toast } from "react-toastify";

const getStoredList =()=>
{
 const storedListStr = localStorage.getItem('add-cart')
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
const addToStoredList =(id)=>
{
    const storedList = getStoredList();
    if(storedList.includes(id))
    {
        toast.warn('Item Already Added To The Cart', {
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
        toast.success('Item Added Successfully To The Cart', {
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
        localStorage.setItem('add-cart', storedListStr)
    }
}


export {addToStoredList, getStoredList}