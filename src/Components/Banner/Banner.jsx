import { useEffect, useState } from 'react';
import BannerImg from '../../assets/banner.jpg'
import Item from '../Item/Item';
import './Banner.css'

const Banner = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const allProducts = () => {
        const btnOne = document.getElementById('btn-1')
        btnOne.classList = "bg-purple-500 btn rounded-3xl border text-white"
        const btnTwo = document.getElementById('btn-2');
         btnTwo.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnThree = document.getElementById('btn-3');
         btnThree.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFour = document.getElementById('btn-4');
         btnFour.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFive = document.getElementById('btn-5');
         btnFive.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnSix = document.getElementById('btn-6');
         btnSix.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
       

        fetch('/data.json')
            .then(res => res.json())
            .then(data => setItems(data))
            document.getElementById('container-h').classList.add('hidden')

    }

    const laptops =()=>
    {
        const btnTwo = document.getElementById('btn-2')
        btnTwo.classList = "bg-purple-500 btn rounded-3xl border text-white"
         const btnOne = document.getElementById('btn-1');
         btnOne.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnThree = document.getElementById('btn-3');
         btnThree.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFour = document.getElementById('btn-4');
         btnFour.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFive = document.getElementById('btn-5');
         btnFive.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnSix = document.getElementById('btn-6');
         btnSix.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
       
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
               const newData = data.filter(item => item.category.includes('Laptop'))
               setItems(newData)
               document.getElementById('container-h').classList.add('hidden')

            })
    }

    const smartPhones =()=>
    {
        const btnThree = document.getElementById('btn-3')
        btnThree.classList = "bg-purple-500 btn rounded-3xl border text-white"
         const btnOne = document.getElementById('btn-1');
         btnOne.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnTwo = document.getElementById('btn-2');
         btnTwo.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFour = document.getElementById('btn-4');
         btnFour.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFive = document.getElementById('btn-5');
         btnFive.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnSix = document.getElementById('btn-6');
         btnSix.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
       
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
               const newData = data.filter(item => item.category.includes('Smartphone'))
               setItems(newData)
               document.getElementById('container-h').classList.add('hidden')

            })  
    }

    const smartWatches=()=>
    {
        const btnFour = document.getElementById('btn-4')
        btnFour.classList = "bg-purple-500 btn rounded-3xl border text-white"
         const btnOne = document.getElementById('btn-1');
         btnOne.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnTwo = document.getElementById('btn-2');
         btnTwo.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnThree = document.getElementById('btn-3');
         btnThree.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFive = document.getElementById('btn-5');
         btnFive.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnSix = document.getElementById('btn-6');
         btnSix.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
       
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
               const newData = data.filter(item => item.category.includes('Smartwatch'))
               setItems(newData)
               document.getElementById('container-h').classList.add('hidden')

            }) 
    }
    
    const headPhones =()=>
    {
        const btnFive = document.getElementById('btn-5')
        btnFive.classList = "bg-purple-500 btn rounded-3xl border text-white"
         const btnOne = document.getElementById('btn-1');
         btnOne.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnTwo = document.getElementById('btn-2');
         btnTwo.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnThree = document.getElementById('btn-3');
         btnThree.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFour = document.getElementById('btn-4');
         btnFour.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnSix = document.getElementById('btn-6');
         btnSix.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
       
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
               const newData = data.filter(item => item.category.includes('Headphones'))
               setItems(newData)
               document.getElementById('container-h').classList.add('hidden')
            }) 
    }
    
    const mackBook =()=>
    {
        const btnSix = document.getElementById('btn-6')
        btnSix.classList = "bg-purple-500 btn rounded-3xl border text-white"
         const btnOne = document.getElementById('btn-1');
         btnOne.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnTwo = document.getElementById('btn-2');
         btnTwo.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnThree = document.getElementById('btn-3');
         btnThree.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFour = document.getElementById('btn-4');
         btnFour.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";
         const btnFive = document.getElementById('btn-5');
         btnFive.classList = "btn  rounded-3xl border border-purple-500 text-purple-500 w-40";

         fetch('/data.json')
            .then(res => res.json())
            .then(data => {
               const newData = data.filter(item => item.category.includes('macBook'))
               
                setItems(newData)
               
                document.getElementById('container-h').classList.remove('hidden')
               
               
              
               
            })
    }

    return (
        <div>
            <div className='mb-80'>
                <div className="bg-[#9538E2] pt-5 flex flex-col gap-10 items-center justify-center text-center pb-44 rounded-b-2xl relative">
                    <h1 className="text-6xl text-white text-center font-bold">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                    <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                    <button className="btn rounded-4xl text-[#9538E2] font-semibold px-5 py-5">Shop Now</button>
                </div>
                <div className=' absolute md:top-[450px] md:left-1/2 md:transform md:-translate-x-1/2 flex justify-center rounded-3xl   mx-auto bg-white/10 backdrop-blur-xs p-5 border border-white w-full max-w-[850px] '>
                    <img className='rounded-3xl h-[360px] w-[800px]' src={BannerImg} alt="" />
                </div>



            </div>
            <div>
                <h1 className='text-4xl font-bold text-center'>Explore Cutting-Edge Gadgets</h1>

                <div className='flex gap-10 '>
                    <div id='products' className='flex flex-col gap-4 my-10 rounded-2xl shadow-2xl p-5 h-fit mt-16'>
                        <button id='btn-1' className='btn all-btn rounded-3xl border border-purple-500 text-purple-500 w-40' onClick={allProducts}  >All Product</button>
                        <button id='btn-2' className='btn all-btn rounded-3xl border border-purple-500 text-purple-500 w-40' onClick={laptops}>Laptops</button>
                        <button id='btn-3' className='btn all-btn rounded-3xl border border-purple-500 text-purple-500 w-40' onClick={smartPhones}>Smart-Phones</button>
                        <button id='btn-4' className='btn all-btn rounded-3xl border border-purple-500 text-purple-500 w-40' onClick={smartWatches}>Smart-Watches</button>
                        <button id='btn-5' className='btn all-btn rounded-3xl border border-purple-500 text-purple-500 w-40' onClick={headPhones}>HeadPhones</button>
                        <button id='btn-6' className='btn all-btn rounded-3xl border border-purple-500 text-purple-500 w-40' onClick={mackBook}>MacBook</button>
                        
                    </div>
                    <div id='items-container' className=' grid grid-cols-2 md:grid-cols-4 gap-5 my-16'>
                        <h1 id='container-h' className='absolute left-1/2 top-[1140px] hidden text-6xl font-bold text-purple-500 text-center '>No Data Found </h1>
                        {
                            items.map(item => <Item key={item.product_id} item={item}></Item>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;