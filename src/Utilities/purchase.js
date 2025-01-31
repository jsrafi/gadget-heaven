const purchaseList =()=>
{
    const loadedData = localStorage.getItem('add-cart')
    if(loadedData)
    {
        localStorage.removeItem('add-cart')
    }
}
export {purchaseList}