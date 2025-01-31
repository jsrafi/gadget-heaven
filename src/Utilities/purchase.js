const purchaseList =()=>
{
    const loadedData = localStorage.getItem('add-cart')
    if(loadedData)
    {
        localStorage.clear()
    }
}
export {purchaseList}