import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    console.log(item)
    const {product_id, product_title, product_image, price, category } = item
    return (
        <div className="card bg-base-100 max-w-lg shadow-2xl  ">
            <figure className='w-fit '>
                <img className='p-5'
                    src={product_image}
                    alt="Shoes" />
            </figure>
            <div className="pl-3 flex flex-col gap-2 pb-5 px-3">
                <h2 className="card-title">{product_title}</h2>
                <p className='text-base text-slate-500'>Category : {category}</p>
                <p className='text-base text-slate-500'>Price: {price}K</p>
                <div className="card-actions ">
                    <Link to={`/items/${product_id}`}><button className="btn rounded-3xl border border-purple-500 text-purple-500 ">Show Details</button></Link>
                </div>
            </div>
        </div>
    );
};


Item.propTypes =
{
    item: PropTypes.object
}

export default Item;