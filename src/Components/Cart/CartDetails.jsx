import Cross from '../../assets/cross.png'
import PropTypes from 'prop-types';

const CartDetails = ({ items }) => {
    const { product_title, description, product_image, price } = items;
    return (
        <div className='flex justify-between shadow-2xl items-center md:max-w-[1200px] md:mx-auto mx-2 rounded-2xl my-4 border border-slate-200'>
            <div className='flex gap-5  items-center'>
                <div className='max-w-50  rounded-2xl p-5'>
                    <img className=' shadow-2xl rounded-2xl' src={product_image} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='text-2xl font-bold'>{product_title}</p>
                    <p className='text-slate-600'>{description}</p>
                    <p className='text-lg font-bold'>Price: ${price}</p>
                </div>
            </div>
            <div className='pr-5'>
                <button><img src={Cross} alt="" /></button>
            </div>
        </div>
    );
};

CartDetails.propTypes =
{
    items: PropTypes.object
}

export default CartDetails;