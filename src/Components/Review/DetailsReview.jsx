import PropTypes from 'prop-types';
import stars from '../../assets/starts.png'

const DetailsReview = ({ review }) => {
    console.log(review)
    const { name, reviews, img } = review
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt=""
                    className="rounded-xl h-52 w-96 object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <img src={stars} alt="" />
                <p>{reviews}</p>

            </div>
        </div>

    );
};

DetailsReview.propTypes =
{
    review: PropTypes.object
}

export default DetailsReview;