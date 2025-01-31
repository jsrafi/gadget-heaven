import { Link } from 'react-router-dom';
import errorIcon from '../../assets/error-404.png'
import { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(()=>
        {
            document.title = "Error | Gadget-Heaven"
        },[])
    return (
        <div className=' flex flex-col gap-4 justify-center items-center text-center my-10'>
            <img className='max-w-44' src={errorIcon} alt="" />
            <h2 className='text-2xl font-bold'>Unexpected Application Error!</h2>
            <h1 className='text-4xl font-bold'>404 Not Found</h1>
            <Link className='btn bg-yellow-500 text-white border-2 rounded-xl px-6 py-5 text-lg border-gray-600 font-bold' to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;