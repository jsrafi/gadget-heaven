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
        alert('bang')
    }
    else
    {
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('add-cart', storedListStr)
    }
}

export {addToStoredList, getStoredList}